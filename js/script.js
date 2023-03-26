let title = () => {
   let title = document.querySelector('title'),
      menuItemActive = document.querySelector('.header__menu > .header__menu-item > ._active');
      title.textContent = menuItemActive.textContent;
}
title();

let burger = () => {
   const menuBurger = document.querySelector('.header__burger');
   const footerMenuBurger = document.querySelector('.footer__burger');

   const footerMenu = document.querySelector('.footer__menu');
   const menu = document.querySelector('.header__menu');

   const headerMenuItem = document.querySelectorAll('.header__menu-item > a');
   const footerMenuItem = document.querySelectorAll('.footer__menu-item > a');

   const arrayColor = [];

   headerMenuItem.forEach((item) => {
      arrayColor.push(item);
   })
   footerMenuItem.forEach((item) => {
      arrayColor.push(item);
   })

   const body = document.querySelector('body');
   menuBurger.addEventListener('click', function (e) {
      menuBurger.classList.toggle('_active');
      menu.classList.toggle('_active');
      body.classList.toggle('_lock');
      arrayColor.forEach((item) => {
         item.classList.toggle('_active-color');
      })
   })

   footerMenuBurger.addEventListener('click', () => {
      footerMenu.classList.toggle('_active');
      footerMenuBurger.classList.toggle('_active');
      body.classList.toggle('_lock');
      arrayColor.forEach((item) => {
         item.classList.toggle('_active-color');
      })
   })
}
burger();

