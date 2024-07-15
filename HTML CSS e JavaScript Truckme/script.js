document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', function () {
    navigation.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  closeMenu.addEventListener('click', function () {
    navigation.classList.remove('open');
    menuToggle.classList.remove('open');
  });

  window.addEventListener('click', function (event) {
    if (!event.target.closest('.header')) {
      navigation.classList.remove('open');
      menuToggle.classList.remove('open');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const readMoreButton = document.getElementById('read-more');
  const moreInfo = document.getElementById('more-info');

  readMoreButton.addEventListener('click', function () {
    moreInfo.classList.toggle('show');
    if (moreInfo.classList.contains('show')) {
      readMoreButton.textContent = 'Mostrar menos';
    } else {
      readMoreButton.textContent = 'Leia mais';
    }
  });
});