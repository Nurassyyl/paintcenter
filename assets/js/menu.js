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

// document.querySelector(".nav-main__submenu").addEventListener('mouseover', (e) => {
//   if (e.type == 'mouseover') {
//     document.querySelector(".submenu").style.transform = "translate(-50%, 0)";
//     document.querySelector(".submenu").style.transform = "scale(1) translate(-50%, 0)";
//   }
// })

// document.querySelector(".nav-main__submenu").addEventListener('mouseout', (e) => {
//   if (e.type == 'mouseout') {
//     // document.querySelector(".submenu").style.transform = "rotateZ(" + 90 + "deg)";
//     // document.querySelector(".submenu").style.transform = "translate(-50%, 0)";
//     document.querySelector(".submenu").style.transform = "scale(0) translate(-50%, 0)";
//   }
// })