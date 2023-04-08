const header = document.getElementById('header');
const theme_toggle = document.getElementById('theme-toggle');

window.onscroll = function() {
    if (scrollY == 0) {
        header.classList.remove(['header-scrolled']);
    } else if (!header.classList.contains('header-scrolled')) {
        header.classList.add(['header-scrolled']);
    }
}

function toggle_theme() {
    const label = theme_toggle.children[0];
    label.innerHTML = label.innerHTML == 'dark_mode' ? 'light_mode' : 'dark_mode';
}