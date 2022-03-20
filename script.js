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
const perso1 = new Personaje('Carlos', ' 20 años ', ' Jugador Empedernido');
const perso2 = new Personaje('Facundo', ' 15 años ', ' Estudiante de Programación');
const perso3 = new Personaje('Claudia ', ' 29 años ', ' Profesora');
const poolPersonajes = [perso1, perso2, perso3];

function saludaUsuario() {
    alert('Hola Bienvenido al Juego del Colgado, Ahorcado o HangMan')
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
        alert(`Excelente, elegiste el personaje 1: ${Object.values(perso1)}`);
        break;
    case 2:
        alert(`Excelente, elegiste el personaje 2: ${Object.values(perso2)}`);
        break;
    case 3:
        alert(`Excelente, elegiste el personaje 3: ${Object.values(perso3)}`);
        break;
    default:
        alert('no elegiste una opción válida');

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
alert(letras);
alert(`Ya tengo tu palabra secreta ${llenandoPalabra}, veamos si la puedes adivinar`);
let palabraCompleta = llenandoPalabra.indexOf(' __ ');
let vidas = 3;

while (vidas != 0) {
  
    letraIngresada = prompt('Ahora ingresa una letra');
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
                alert('vamos por otra letra');
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