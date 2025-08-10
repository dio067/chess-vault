import layout from '../layouts/authentication.js';
import helpers from '../helpers.js';

export default ({ errors }) => {
  return layout(`
<form method="POST">
			<div class="signup-wrapper">
				<h1>Sign Up</h1>
				<div class="input-box">
					<input type="username" placeholder="" required name="username"/>
					<label>Username</label>
					<i class="bx bxs-user"></i>
					<p class="help is-danger">${helpers.getError(errors, 'username')}</p>
				</div>
				<div class="input-box">
					<input type="email" placeholder="" required name="email"/>
					<label>Email</label>
					<i class="bx bxs-user"></i>
					<p class="help is-danger">${helpers.getError(errors, 'email')}</p>
				</div>
				<div class="input-box">
					<input type="password" placeholder="" required  name="password"/>
					<label>Password</label>
					<i class="bx bxs-lock-alt"></i>
					<p class="help is-danger">${helpers.getError(errors, 'password')}</p>
				</div>

				<div class="input-box">
					<input type="password" placeholder="" required name="passwordConfirmation" />
					<label>Password Confirmation</label>
					<i class="bx bxs-lock-alt"></i>
					<p class="help is-danger">${helpers.getError(
            errors,
            'passwordConfirmation'
          )}</p>
				</div>
				<button type="submit" class="btn">Register</button>

				<div class="register-link">
					<label>Already have an account? <a href="/signin">Login</a></label>
				</div>
			</div>
		</form>

        `);
};
