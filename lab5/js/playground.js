const calcButton = document.querySelector('#calcButton');
const clearButton = document.querySelector('#clear');
const result = document.querySelector('#resultado')

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

/* calcButton.onclick = () => {
    document.getElementById('resultado').innerHTML = eval(document.getElementById('calc').value);
}; */