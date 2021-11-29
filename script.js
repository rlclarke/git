const hamburgerMenu = document.querySelector('#menu-hamburger');
const closeMenu = document.querySelector('#menu-close');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', function(){
  menu.classList.add('menu-open');
})

closeMenu.addEventListener('click', function () {
  menu.classList.remove('menu-open');
})