import layout from '../layouts/pages.js';
import helpers from '../helpers.js';

export default ({ errors }) => {
  return layout(`<form method="post">
	<div class="grid-container">
			<div class="header">
				<div class="header-left">
					<a href="/home">
						<span class="material-symbols-outlined"> arrow_back </span> BACK
					</a>
				</div>
				<div class="header-right">
					<a href="/signout">
						<span class="material-symbols-outlined"> logout </span> SIGN OUT
					</a>
				</div>
			</div>
			<main class="main-grid">
				<main class="main-left"></main>
				<main class="main-mid">
					<a href="/profile/edit">
						<div class="profile-image">
							<img src="./card1.jpeg" alt="Change Profile Photo" />
						</div>
						<div class="username">
							<h1>@username</h1>
						</div>

						<div class="edit-profile">
							<h2>Edit Profile</h2>
							<span class="material-symbols-outlined"> edit_square </span>
						</div>
					</a>
				</main>
				<main class="main-right">
					<div class="main-cards">
						<a href="play">
							<div class="card">
								<span class="material-symbols-outlined"> sports_esports </span>
								<h2>GAMES</h2>
							</div>
						</a>

						<a href="database">
							<div class="card">
								<span class="material-symbols-outlined"> database_search </span>
								<h2>DATABASE</h2>
							</div></a
						>
					</div>
				</main>
			</main>
		</div>
        </form>`);
};
