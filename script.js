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

const menuLink = document.querySelectorAll('.menu-link');
const navItems = document.querySelectorAll('.nav-item');
menuLink.forEach((item) => {
    item.addEventListener('click', () => {
        menuLink.forEach((nav) => {
            nav.classList.remove('active-link');
        });
        item.classList.add('active-link');
        if (window.innerWidth <= 600){
        menuList.style.maxHeight = 0;
        menuList.classList.toggle("show");
        burgerMenu.classList.toggle("active");
    }

});
});












