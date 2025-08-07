let opendSidebar = false;

const sidebar = document.querySelector('.sidebar');

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
