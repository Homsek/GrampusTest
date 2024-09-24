const menuBurger = document.querySelector('.header__menu-burger');

menuBurger.addEventListener('click', () => {
   if (!menuBurger.classList.contains('_active')) {
      menuBurger.classList.add('_active');
      document.querySelector('.header__list-menu').classList.add('_active');
      document.body.classList.add('_lock');
   } else {
      menuBurger.classList.remove('_active');
      document.querySelector('.header__list-menu').classList.remove('_active');
      document.body.classList.remove('_lock');
   }
});

Fancybox.bind("[data-fancybox]", {
   closeButton: false,
   closeExisting: true,
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
   relativeInput: true,
   hoverOnly: true
});
