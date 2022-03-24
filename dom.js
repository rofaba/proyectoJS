//DESAFIO COMPLEMENTARIO MODIFICANDO EL DOM
//simulación proceso de selección de personaje en el juego

// alert("jsfunciona");

const tarjeta = document.getElementById("probando");

function resaltar() {
    tarjeta.style.backgroundColor = 'yellow';

};

function normalizar() {
    tarjeta.style.backgroundColor = 'rgb(160, 138, 138)';
}

let fotoSelect = document.getElementById("seleccion");
let nombreNuevo = document.getElementById('nombreSeleccionado');
let nuevoTexto = document.getElementById('textoSeleccionado');

function seleccionarPersonaje() {
    fotoSelect.src = "imagenes/personajeBart.jpg";
    nombreNuevo.innerHTML = 'Bart Simpson';
    nuevoTexto.innerHTML = 'Seleccionaste Bart Para Jugar';

}

tarjeta.addEventListener("mouseover", resaltar);

tarjeta.addEventListener("mouseleave", normalizar);

tarjeta.addEventListener("click", seleccionarPersonaje);



