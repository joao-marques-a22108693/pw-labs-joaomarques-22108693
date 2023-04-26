const calcButton = document.querySelector('#calcButton');
const clearButton = document.querySelector('#clear');
const result = document.querySelector('#resultado');
const img_txt = document.querySelector('#img-txt');

document.querySelector('#date').innerHTML = Date();

window.onscroll = function() {
    if (scrollY == 0) {
        header.classList.remove(['header-scrolled']);
    } else if (!header.classList.contains('header-scrolled')) {
        header.classList.add(['header-scrolled']);
    }
}

document.querySelectorAll('#calc > button').forEach(button => {
    if (button.innerHTML != '=' && button.innerHTML != 'C') {
        button.onclick = function() {
            result.value += button.innerHTML;
        }
    }
});

calcButton.onclick = function() {
    result.value = eval(result.value);
}

clearButton.onclick = function() {
    result.value = '';
}

img_txt.onkeypress = function(event) {
    if (event.which == 13) {
        document.querySelector('#img-lbl').innerHTML = img_txt.value;
    }
}
