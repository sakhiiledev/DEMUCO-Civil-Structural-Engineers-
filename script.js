// Smooth scroll for in-page anchors
(function() {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
      // For links to other pages, let the browser handle navigation
    });
  });
})();
// Sidebar mobile nav logic
(function() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebarNav = document.querySelector('.sidebar-nav');
  const sidebarClose = document.querySelector('.sidebar-close');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  function openSidebar() {
    sidebarNav && sidebarNav.classList.add('open');
    sidebarOverlay && sidebarOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebarNav && sidebarNav.classList.remove('open');
    sidebarOverlay && sidebarOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  sidebarToggle && sidebarToggle.addEventListener('click', openSidebar);
  sidebarClose && sidebarClose.addEventListener('click', closeSidebar);
  sidebarOverlay && sidebarOverlay.addEventListener('click', closeSidebar);
  // Close sidebar on link click
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
})();
