import layout from '../layouts/authentication.js';
import helpers from '../helpers.js';

export default ({ errors }) => {
  return layout(`
		        	<form method="post">
			<div class="signin-wrapper">
				<h1>Login</h1>
				<div class="input-box">
					<input type="email" name="email" placeholder="" required "/>
					<label>Email</label>
					<i class="bx bxs-user"></i>
					<p class="help is-danger">${helpers.getError(errors, 'email')}</p>
				</div>
				<div class="input-box">
					<input type="password" name="password" placeholder="" required />
					<label>Password</label>
					<i class="bx bxs-lock-alt"></i>
					<p class="help is-danger">${helpers.getError(errors, 'password')}</p>
				</div>

				<button type="submit" class="btn">Login</button>

				<div class="register-link">
					<label>Don't have an account? <a href="/signup">Register</a></label>
				</div>
			</div>
		</form>
`);
};
