import layout from '../layouts/authentication.js';
import helpers from '../helpers.js';

export default ({ errors }) => {
  return layout(`
<form method="POST">
			<div class="signup-wrapper">
				<h1>Sign Up</h1>
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

				<div class="input-box">
					<input type="password" placeholder="" required />
					<label>Password Confirmation</label>
					<i class="bx bxs-lock-alt"></i>
				</div>
				<button type="submit" class="btn">Login</button>

				<div class="register-link">
					<label>Already have an account? <a href="/signin">Login</a></label>
				</div>
			</div>
		</form>

        `);
};
