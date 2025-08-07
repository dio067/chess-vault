const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main-container');
const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('header');

let sidebarOpened = false;

menuIcon.addEventListener('click', () => {
  if (sidebarOpened) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

function openSidebar() {
  if (!sidebarOpened) {
    sidebar.classList.add('sidebar-open');
    sidebar.classList.remove('sidebar-hidden');
    main.classList.add('main-sidebar-open');
    window.addEventListener('click', listenerOutsideSidebar);
    sidebarOpened = true;
  }
}

function closeSidebar() {
  if (sidebarOpened) {
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-hidden');
    main.classList.remove('main-sidebar-open');
    window.removeEventListener('click', listenerOutsideSidebar);
    sidebarOpened = false;
  }
}

function listenerOutsideSidebar(e) {
  if (
    !sidebar.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    !header.contains(e.target)
  ) {
    closeSidebar();
  }
}
