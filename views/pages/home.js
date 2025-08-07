import layout from '../layouts/pages.js';
export default ({ errors }) => {
  return layout(`
		<div class="grid-container">
			<header class="header">
				<div class="header-left">
					<div class="menu-icon">
						<span class="material-symbols-outlined"> menu </span>
					</div>
				</div>
				<div class="header-right">
					<span class="material-symbols-outlined"> brightness_empty </span>
					<span class="material-symbols-outlined"> notifications </span>
					<span class="material-symbols-outlined"> mail </span>
					<span class="material-symbols-outlined"> account_circle </span>
				</div>
			</header>
			<aside class="sidebar sidebar-hidden" id="sidebar">
				<div class="sidebar-title">
					<div class="sidebar-signture">
						<span class="material-symbols-outlined"> chess_knight </span>Menu
						<span class="material-symbols-outlined close-icon" onclick="closeSidebar()"
							>close</span
						>
					</div>
				</div>
				<ul class="sidebar-list">
					<a href="/play">
						<li class="sidebar-list-item">
							<span class="material-symbols-outlined"> chess_pawn </span>PLAY
						</li>
					</a>
					<a href="/analyze">
						<li class="sidebar-list-item">
							<span class="material-symbols-outlined"> troubleshoot </span
							>ANALYZE
						</li>
					</a>
					<a href="/database">
						<li class="sidebar-list-item">
							<span class="material-symbols-outlined"> database </span>DATABASE
						</li>
					</a>
				</ul>
			</aside>
			<main class="main-container">
				<div class="main-title">
					<h2>MAIN INTERFACE</h2>
				</div>
				<div class="main-cards">
					<div class="card">
						<span class="material-symbols-outlined"> chess_rook </span>
						<h2>ANALYZE YOUR GAMES WITH STOCKFISH</h2>
					</div>
					<div class="card">
						<span class="material-symbols-outlined"> chess_bishop </span>
						<h2>PLAY AGAINST STOCLFISH</h2>
					</div>
					<div class="card">
						<span class="material-symbols-outlined"> chess_king </span>
						<h2>SAVE YOUR FAVOURITE GAMES</h2>
					</div>
				</div>
			</main>
		</div>
	`);
};
