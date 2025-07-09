import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cookieSession({
		keys: ["kfdjkjdfkljd"],
	})
);
app.listen(4000, () => {
	console.log("Listening....");
});
