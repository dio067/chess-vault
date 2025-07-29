import layout from '../layouts/authentication.js';

export default ({ errors }) => {
  return layout(`
			<form method="POST">
			<div class="signin-wrapper">
				<h1>Login</h1>
				<div class="input-box">
					<input type="email" placeholder="" required />
					<label>Email</label>
					<i class="bx bxs-user"></i>
				</div>
				<div class="input-box">
					<input type="password" placeholder="" required />
					<label>Password</label>
					<i class="bx bxs-lock-alt"></i>
				</div>

				<button type="submit" class="btn">Login</button>

				<div class="register-link">
					<label>Don't have an account? <a href="/signup">Register</a></label>
				</div>
			</div>
		</form>
        `);
};
