import layout from '../layouts/profile-edit.js';

export default ({ username, email }) => {
  return layout(`
      		<div class="grid-container">
			<div class="header">
				<div class="header-left">
					<a href="/profile">
						<span class="material-symbols-outlined"> arrow_back </span> BACK
					</a>
				</div>
				<div class="header-right">
					<a href="/profile">
						<span class="material-symbols-outlined"> logout </span> SIGN OUT
					</a>
				</div>
			</div>
			<main class="main-grid">
				<main class="left"></main>
				<main class="mid">
					<div class="mid-left">
						<div class="mid-title">
							<h1>Edit Profile:</h1>
						</div>
						<div class="mid-pic">
							<img src="/images/default-img.png" alt="" />
							<input type="file"  id="fileinput" accept="images/*"/>
							<span class="material-symbols-outlined"> photo_camera </span>
						</div>
					</div>
					<div class="mid-info">
						<div class="username">
							<h3>Username:</h3>
							<input type="username" placeholder=${username} />
							<span class="material-symbols-outlined"> select_check_box </span>
						</div>
						<div class="email">
							<h3>Email:</h3>
							<input type="email" placeholder=${email} />
							<span class="material-symbols-outlined"> select_check_box </span>
						</div>
						<div class="password">
							<h3>New Password:</h3>
							<input type="password" placeholder="password" />
						</div>

						<div class="password-confirmation">
							<input
								type="passwordConirmation"
								placeholder="password confirmation"
							/>
							<span class="material-symbols-outlined"> select_check_box </span>
						</div>
					</div>
				</main>
				<main class="right"></main>
			</main>
		</div>
        `);
};
