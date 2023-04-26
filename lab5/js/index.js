const menu = document.getElementById('menu');

window.onscroll = function() {
    if (scrollY == 0) {
        header.classList.remove(['header-scrolled']);
    } else if (!header.classList.contains('header-scrolled')) {
        header.classList.add(['header-scrolled']);
    }
}


function toggle_menu() {
    menu.style.display = menu.style.display != 'flex' ? 'flex' : 'none';
}