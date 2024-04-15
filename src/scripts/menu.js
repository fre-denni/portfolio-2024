document.addEventListener('astro:page-load', () => {
    document.querySelector('.hamburger').addEventListener('click', toggleNav);
    document.querySelector('.header-nav a').addEventListener('click', toggleNav);


function toggleNav() {
    if(document.body.classList.contains('show-nav')) {
        document.body.classList.remove('show-nav');
    } else {
        document.body.classList.add('show-nav');
    }
}

});