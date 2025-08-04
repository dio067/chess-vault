let opendSidebar = false;

const sidebar = document.querySelector('.sidebar');

function openSidebar() {
  if (!openedSidebar) {
    sidebar.classList.add('sidebar-responsive');
    opendSidebar = true;
  }
}

function closeSidebar() {
  if (openedSidebar) {
    sidebar.classList.remove('sidebar-responsive');
    openedSidebar = false;
  }
}
