const burgerBtn = document.querySelector(".burger");
const burgerBtnClose = document.querySelector(".burger-close");
const menu = document.querySelector(".nav-main-mobile");

burgerBtn.addEventListener('click', () => {
  menu.classList.add("active");
})

burgerBtnClose.addEventListener('click', () => {
  menu.classList.remove("active");
})

// submenu

const menuLinkBtn = document.querySelector(".nav-main-mobile__btn");
const submenuCloseBtn = document.querySelector(".submenu-close__btn");
const subMenu = document.querySelector(".submenu");

menuLinkBtn.addEventListener('click', () => {
  subMenu.classList.add("active");
})

submenuCloseBtn.addEventListener('click', () => {
  subMenu.classList.remove("active");
})