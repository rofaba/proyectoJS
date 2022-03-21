//Simulador interactivo JS: Juego de "El Colgado".
// PRIMERA ENTREGA FINAL

//creación de personajes
class Personaje {
    constructor(nombre, edad, ocupacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
}
const perso1 = new Personaje('Homero ', ' 39 años ', ' Técnico Nuclear');
const perso2 = new Personaje('Bart ', ' 10 años ', ' Niño Incomprendido');
const perso3 = new Personaje('Lisa ', ' 8 años ', ' Niña Genio');
const poolPersonajes = [perso1, perso2, perso3];

function saludaUsuario() {
    alert('Hola Bienvenido al Juego del Ahorcado o HangMan')
}
function indexRandom(minimo, maximo) {   //número al azar para extraer palabra desde array base 
    var numerosPosibles = maximo - minimo;
    var random = Math.random() * (numerosPosibles + 1);
    random = Math.floor(random);  // transformación a numero entero
    return minimo + random;
}
const poolPalabras = ['PALABRAS', 'PARA', 'PRUEBA', 'JUEGO', 'COLGADO', 'PARA', 'ELEGIR', 'USUARIO', 'PENDIENTE', 'VERSION', 'FINAL'];

saludaUsuario();
alert('Lo primero es que elijas tu personaje, tengo 3 disponibles');

let eligePersonaje = parseInt(prompt('Por favor, indìcame cuál prefieres: 1, 2 ó 3'));
switch (eligePersonaje) {
    case 1:
        alert(`Muy bien, elegiste a: ${Object.values(perso1)}`);
        break;
    case 2:
        alert(`Excelente, elegiste a: ${Object.values(perso2)}`);
        break;
    case 3:
        alert(`Bien hecho, elegiste a: ${Object.values(perso3)}`);
        break;
    default:
        alert('No elegiste personaje, te asignaré uno de todos modos.');

}
let numeroAleatorio = indexRandom(0, 10);
let palabra = poolPalabras[numeroAleatorio];

//transformamos el string en un array donde podremos buscar (spread operator)
const letras = [...palabra];

// creamos el array a llenar en el proceso de juego con tantos "_" como número de letras

const llenandoPalabra = [];
for (let i = 0; i < letras.length; i++) {
    llenandoPalabra.push(' __ ');
}
console.log(letras);

alert(`Ya tengo tu palabra secreta ${llenandoPalabra}, veamos si la puedes adivinar`);
let palabraCompleta = llenandoPalabra.indexOf(' __ ');
let vidas = 3;

while (vidas != 0) {
  
    letraIngresada = prompt('Vamos, ingresa una letra');
    let letraMayus = letraIngresada.toUpperCase();
    let contadorAcierto = [];
    
    if (isNaN(letraMayus)) {  //si no es un número, busca en cada index y agrega su posición a otro array 

        let indice = 0;
        while (indice < letras.length + 1) {
            if (letras[indice] == letraMayus) {
                contadorAcierto.push(indice);
                llenandoPalabra[indice] = letraMayus;
                indice++;

            }
            else {
                indice++;

            }
        }
            if (contadorAcierto.length == 0) {
            vidas--
            alert(`la letra ${letraMayus} no se encuentra en tu palabra`);
                    if(vidas == 0) {
                    alert('Se te acabaron las vidas, lo siento')  
                    }
                    else{
                    alert(`Te quedan ${vidas} intentos más`)
                    }
            } else {
                     alert(`Tu palabra: ${llenandoPalabra}`);
            }    
            
            if ((llenandoPalabra.indexOf(' __ ') != -1) && (vidas != 0)){
                // alert('vamos por otra letra');
            } else {
                        if(vidas != 0) {
                        alert('GANASTE, tu palabra está completa!!!!!')
                        indice = 50;
                        vidas=0}

        }
    }

    else {
        alert('el valor que ingresaste es un número, no una letra');
    }
let palabraCompleta = llenandoPalabra.indexOf(' __ ');
}

alert('Gracias por jugar, hasta la próxima');