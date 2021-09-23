

const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const links = [...linksHead, mainScroll];

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const ID = e.target.getAttribute('href').substr(1)

        if (document.querySelector('.humburger-menu').classList.contains('humburger-menu-active')) {
            document.querySelector('.menu').classList.toggle('menu-active');
            document.querySelector('.humburger-menu').classList.toggle('humburger-menu-active')
        }

        if (document.getElementById(ID)) {
            document.getElementById(ID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })

        }
    })
})