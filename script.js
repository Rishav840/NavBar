// const burgerMenu = document.querySelector('.burger-menu');
// const menuList = document.querySelector('.menu-list');

// burgerMenu.addEventListener("click",()=>{
//   burgerMenu.classList.toggle("active");
//   menuList.classList.toggle("show");
// });

const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu-list');

burgerMenu.addEventListener(("click"), () => {
    burgerMenu.classList.toggle("active");
    menuList.classList.toggle("show");

    if (menuList.classList.contains('show')) {
        menuList.style.maxHeight = menuList.scrollHeight + 'px';
    } else {
        menuList.style.maxHeight = '0';
    }
});













