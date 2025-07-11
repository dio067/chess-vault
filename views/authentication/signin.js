import layout from "../layouts/authentication.js";

export default (errors) => {
	return layout(`
        		<div class="wrapper">
			<h1>Sign Up</h1>
			<div class="input-box">
				<input type="text" required />
				<label>Email</label>
				<i class="bx bxs-user"></i>
			</div>
			<div class="input-box">
				<input type="password" required />
				<label>Password</label>
				<i class="bx bxs-lock-alt"></i>
			</div>
			<div class="input-box">
				<input type="password" required />
				<label>Password Confirmation</label>
			</div>

			<button class="btn" type="submit">Register</button>

			<div class="login-link">
				<p>Already have an account?<a href="/signin"> Login</a></p>
			</div>
		</div>
        `);
};
