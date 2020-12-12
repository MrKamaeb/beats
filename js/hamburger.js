const menuOpenBurger = (function (buttonClass, menuClass) {
  const button = document.querySelector(buttonClass);
  const menu = document.querySelector(menuClass);
  const body = document.querySelector('body');

  const _toggleMenu = function (e) {
    button.classList.toggle('button_container--active');
    menu.classList.toggle('overlay--open');
    body.classList.toggle('body-active-menu');
  }
  

  const addListeners = function () {
    button.addEventListener('click', _toggleMenu);
  };

  return {
    open: addListeners,
  };

})('#toggle', '#overlay');

console.log(menuOpenBurger);
menuOpenBurger.open();