import layout from "../layouts/authentication.js";

export default ({ errors }) => {
	return layout(`
		<div class="wrapper">
			<h1>Login</h1>
			<form action="">
				<div class="input-box">
					<input type="text" value="" required />
					<label for="">Email</label>
					<i class="bx bxs-user"></i>
				</div>
				<div class="input-box">
					<input type="password" required />
					<label for="">Password</label>
					<i class="bx bxs-lock-alt"></i>
				</div>
				<div class="remember-forgot">
					<label>
						<input type="checkbox" />
						Remember me
					</label>
					<a href="#">Forgot Password?</a>
				</div>

				<button type="submit" class="btn">Login</button>

				<div class="register-link">
					<p>Don't have an account? <a href="/signup">Register</a></p>
				</div>
			</form>
		</div>
        `);
};
