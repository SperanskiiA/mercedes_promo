const burgerBtn = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');

const toggleMenu = () => {
    menu.classList.toggle('menu-active');
    burgerBtn.classList.toggle('humburger-menu-active')
}

burgerBtn.addEventListener('click', () => toggleMenu());




