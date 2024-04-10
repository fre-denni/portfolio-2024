document.addEventListener('astro:page-load', () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('expanded');
        document.querySelector('.hamburger').classList.toggle('open');
    });
});