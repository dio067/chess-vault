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
			<main class="main-container"></main>
		</div>
        </form>`);
};
