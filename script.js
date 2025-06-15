document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  // Initially hide the close icon
  closeIcon.style.display = 'none';
  
  navToggle.addEventListener('change', function() {
    if (this.checked) {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
  
  // Close menu when clicking on overlay
  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', () => {
    navToggle.checked = false;
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    document.body.style.overflow = '';
  });
  
  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.checked = false;
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = '';
    });
  });
});
