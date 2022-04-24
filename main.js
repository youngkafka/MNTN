const menuBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu')
menuBtn.addEventListener('click', function () {
   mobileMenu.classList.toggle('mobile-menu-visible');
   menuBtn.classList.toggle('burger-close');
})