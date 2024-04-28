document.addEventListener('astro:page-load', () => {
    document.querySelector('.hamburger').addEventListener('click', toggleTag); //find bigger container? add other class?
    document.querySelector('.header-nav a').addEventListener('click', toggleTag); //why there was this? (stupid fede)


function toggleTag() {
    if(document.body.classList.contains('tag-selected')) { 
        document.body.classList.remove('show-nav'); //remove tag-selected, add tag-unselected --> trigger tag filter code
    } else {
        document.body.classList.add('show-nav'); //add tag-selected, remove tag-unselected
    }
}

});