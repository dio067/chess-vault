import fs from "fs";
import crypto from "crypto";
import util from "util";
import generalRepo from "./repo.js";

const scrypt = util.promisify(crypto.scrypt);

class User extends generalRepo {
	async comparePassoword(saved, supplied) {
		const [hashed, salt] = saved.split(".");

		const hashedSupplied = scrypt(supplied, salt, 64);

		return hashedSupplied.toString("hex") === hashed;
	}
	async create(attrs) {
		attrs.id = this.randomId();

		const salt = crypto.randomBytes(8).toString("hex");

		const buff = await scrypt(attrs.password, salt, 64);

		const records = await this.getAll();
		const record = { ...attrs, password: `${buff.toString("hex")}.${salt}` };
		records.push(record);

		await this.writeAll(records);

		return record;
	}
}

export default new User("users.json");
