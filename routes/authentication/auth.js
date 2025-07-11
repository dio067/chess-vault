import express from "express";
import signinTemplate from "../../views/authentication/signin.js";
import signupTemplate from "../../views/authentication/signup.js";

const router = express.Router();

router.get("/signup", (req, res) => {
	res.send(signupTemplate({ req }));
});

router.get("/signin", (req, res) => {
	res.send(signinTemplate({ req }));
});
export default router;
