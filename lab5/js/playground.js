const calcButton = document.querySelector('#calcButton');

calcButton.onclick = () => {
    document.getElementById('resultado').innerHTML = eval(document.getElementById('calc').value);
};