const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu-list');

burgerMenu.addEventListener("click",()=>{
  burgerMenu.classList.toggle("active");
  menuList.classList.toggle("show");
});