const swiper = new Swiper('.swiper', {
   loop: true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   spaceBetween: 32,
   autoplay: {
      delay: 6000,
      disableOnInteraction: false
   },
   speed: 500,
});