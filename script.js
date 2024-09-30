const btnOpenMenu = document.querySelector('.navbar__toggle--open');
const btnCloseMenu = document.querySelector('.navbar__toggle--close');
const headerEl = document.querySelector('.header');

btnOpenMenu.addEventListener('click', function () {
    headerEl.classList.add('navbar--opened')
});

btnCloseMenu.addEventListener('click', function () {
    headerEl.classList.remove('navbar--opened')
})