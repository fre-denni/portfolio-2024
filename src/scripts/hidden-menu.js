document.addEventListener('astro:page-load', () => {

let lastScrollTop = 0;
let isVisible = false;

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let stopElement = document.getElementById("stop");
    let stopElementPosition = stopElement.getBoundingClientRect();

    if (scrollTop > lastScrollTop && isVisible) {
        document.querySelector('.hidden-nav').classList.remove('visible');
        isVisible = false;
    } else if (scrollTop < lastScrollTop && !isVisible) {
        document.querySelector('.hidden-nav').classList.add('visible');
        isVisible = true;
    }

    if(stopElementPosition.top <= window.innerHeight && stopElementPosition.bottom >= 0) {
        document.querySelector('.hidden-nav').classList.remove('visible');
        isVisible = false;
    }

    lastScrollTop = scrollTop;
}, false);

});