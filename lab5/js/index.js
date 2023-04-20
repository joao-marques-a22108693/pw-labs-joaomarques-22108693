const header = document.getElementById('header');
const theme_toggle = document.getElementById('theme-toggle');
const menu_button = document.getElementById('menu-toggle');

window.onscroll = function() {
    if (scrollY == 0) {
        header.classList.remove(['header-scrolled']);
    } else if (!header.classList.contains('header-scrolled')) {
        header.classList.add(['header-scrolled']);
    }
}

function toggle_theme() {
    const label = theme_toggle.children[0];
    const menu_label = menu_button.children[0];
    const opposite_theme = label.innerHTML == 'dark_mode' ? 'dark' : 'light';
    const current_theme = opposite_theme == 'dark' ? 'light' : 'dark';

    label.innerHTML = current_theme + '_mode';
    label.style.color = current_theme == 'light' ? 'white' : 'black';
    menu_label.style.color = current_theme == 'light' ? 'white' : 'black';

    for (const e of document.querySelectorAll(`.${current_theme}`)) {
        e.classList.replace(current_theme, opposite_theme);
    }
}