document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');
    const closeMenu = document.getElementById('close-menu');
  
    menuToggle.addEventListener('click', function() {
      navigation.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  
    closeMenu.addEventListener('click', function() {
      navigation.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  
    window.addEventListener('click', function(event) {
      if (!event.target.closest('.header')) {
        navigation.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });
  