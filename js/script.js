const mobile = document.querySelector('#menu-mobile');
const linea1 = document.querySelector('#linea1');
const linea2 = document.querySelector('#linea2');
const linea3 = document.querySelector('#linea3');

cargarEventListeners();
function cargarEventListeners(){

    // mostraremos el menu mobile
    document.querySelector('#btn').onclick = () => {
        mobile.classList.toggle('active');
        linea1.classList.toggle('active');
        linea2.classList.toggle('active')
        linea3.classList.toggle('active')
    }
}