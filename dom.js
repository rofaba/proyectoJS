//seleccion de personajes

let tarjeta1 = document.getElementById("probandoHomero");
let tarjeta2 = document.getElementById("probandoBart");
let tarjeta3 = document.getElementById("probandoLisa");

function resaltarHomero() {
    tarjeta1.style.backgroundColor = "#ffd90f";

};
function normalizarHomero() {
    tarjeta1.style.backgroundColor = 'rgb(235, 229, 229)';
}

function resaltarBart() {
    tarjeta2.style.backgroundColor = "#ffd90f";

};
function normalizarBart() {
    tarjeta2.style.backgroundColor = 'rgb(235, 229, 229)';
}

function resaltarLisa() {
    tarjeta3.style.backgroundColor = "#ffd90f";

};
function normalizarLisa() {
    tarjeta3.style.backgroundColor = 'rgb(235, 229, 229)';
}

let fotoSelect = document.getElementById("seleccion");
let nombreNuevo = document.getElementById('nombreSeleccionado');
let nuevoTexto = document.getElementById('textoSeleccionado');

function seleccionarHomero() {
    fotoSelect.src = "imagenes/personajeHomero.jpeg";
    nombreNuevo.innerHTML = 'Homero Simpson';
    nuevoTexto.innerHTML = 'Click en Jugar pra empezar';
    localStorage.setItem("personaje",'Homero Simpson');
}
function seleccionarBart() {
    fotoSelect.src = "imagenes/personajeBart.jpg";
    nombreNuevo.innerHTML = 'Bart Simpson';
    nuevoTexto.innerHTML = 'Click en Jugar pra empezar';
    localStorage.setItem("personaje",'Bart Simpson');
}
function seleccionarLisa() {
    fotoSelect.src = "imagenes/personajeLisa.jpeg";
    nombreNuevo.innerHTML = 'Lisa Simpson';
    nuevoTexto.innerHTML = 'Click en Jugar pra empezar';
    localStorage.setItem("personaje",'Lisa Simpson');
}
tarjeta1.addEventListener("click",seleccionarHomero);
tarjeta2.addEventListener("click",seleccionarBart);
tarjeta3.addEventListener("click",seleccionarLisa);

tarjeta1.addEventListener("mouseover", resaltarHomero);
tarjeta1.addEventListener("mouseleave", normalizarHomero);
tarjeta2.addEventListener("mouseover", resaltarBart);
tarjeta2.addEventListener("mouseleave", normalizarBart);
tarjeta3.addEventListener("mouseover", resaltarLisa);
tarjeta3.addEventListener("mouseleave", normalizarLisa);