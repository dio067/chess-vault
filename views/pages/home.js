import layout from '../layouts/pages.js';
export default ({ errors }) => {
  return layout(`
      <form method="post">
		<div class="grid-container">
			<header class="header">
				<div class="menu-icon" onclick="openSidebar()">
					<span class="material-symbols-outlined"> menu </span>
				</div>
				<div class="header-left">
					<span class="material-symbols-outlined"> brightness_empty </span>
				</div>
				<div class="header-right">
					<span class="material-symbols-outlined"> notifications </span>
					<span class="material-symbols-outlined"> mail </span>
					<span class="material-symbols-outlined"> account_circle </span>
				</div>
			</header>
			<aside class="sidebar" id="sidebar">
				<div class="sidebar-title">
					<div class="sidebar-signture">
						<span class="material-symbols-outlined"> chess_knight </span>Menu
						<span class="material-symbols-outlined" onclick="closeSidebar()">
							close
						</span>
					</div>
				</div>
				<ul class="sidebar-list">
					<li class="sidebar-list-item">
						<span class="material-symbols-outlined"> chess_pawn </span>PLAY
					</li>
					<li class="sidebar-list-item">
						<span class="material-symbols-outlined"> troubleshoot </span>ANALYZE
					</li>
					<li class="sidebar-list-item">
						<span class="material-symbols-outlined"> database </span>DATABASE
					</li>
				</ul>
			</aside>
			<main class="main-container">
				<div class="main-title">
					<h2>MAIN INTERFACE</h2>
				</div>
				<div class="main-cards">
					<div class="card">
						<img src="./card1.jpeg" alt="Card 1" />
					</div>
					<div class="card">
						<img src="./card2.jpeg" alt="Card 2" />
					</div>
					<div class="card">
						<img src="./card3.jpeg" alt="Card 3" />
					</div>
				</div>
			</main>
		</div>
        <form></form>`);
};
