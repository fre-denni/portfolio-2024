window.addEventListener('astro:page-load', (event) => {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    
    var menuItems = document.querySelectorAll(".menu li a");
    for (var i = 0; i < menuItems.length; i++) {
        var href = menuItems[i].getAttribute('href');
        href = href.replace(/\/$/, ""); // Remove trailing slash from href, if present
        if (path === href) { // Adjusted matching logic
            menuItems[i].closest('li').classList.add('menu-active');
        }
    }    
});

