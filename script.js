//Simulador interactivo JS: Juego de "El Colgado".
// DESAFIO COMPLEMENTARIO 2 INCLUYENDO OBJETOS FUNCIONES ARRAYS Y METODOS

//creación de personajes .
class Personaje {
    constructor(nombre, edad, ocupacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
}
const perso1 = new Personaje('Carlos', ' 20 años ', ' Jugador Empedernido');
const perso2 = new Personaje('Roberto', ' 15 años ', ' Estudiante');
const perso3 = new Personaje('Claudia ', ' 29 años ', ' Profesora');
const poolPersonajes = [perso1, perso2, perso3];

function saludaUsuario() {
    alert(`Hola Amigo, hoy tengo algo nuevo que mostrarte`)
}
function indexRandom(minimo, maximo) {   //los argumentos se establerán entre 0 y el número total de palabras 
    var numerosPosibles = maximo - minimo;
    var random = Math.random() * (numerosPosibles + 1);
    random = Math.floor(random);  // necesito un numero entero
    return minimo + random;
}
const poolPalabras = ['PALABRAS', 'PARA', 'PRUEBA', 'JUEGO', 'COLGADO', 'PARA', 'ELEGIR', 'USUARIO', 'PENDIENTE', 'VERSION', 'FINAL'];
// total de palabras aún no definido

//INICIO INTERACCION
saludaUsuario();
alert('Estas son las bases de un juego de palabras que programaré');

let eligePersonaje = parseInt(prompt('Habrá personajes para elegir, elige entre personajes 1, 2 o 3'));
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
alert('A modo de demostración generaré un número al azar entre 0-10 , después lo usaremos para elegir tu palabra desde un pool');
let numeroAleatorio = indexRandom(0, 10);
alert(`El número aleatorio generado para tí es ${numeroAleatorio}`);

let palabra = poolPalabras[numeroAleatorio];
alert(`Con ese número tu palabra aleatoria corresponde a ${palabra}`);

//transformamos el string en un array donde podremos buscar (spread operator)
const letras = [...palabra];

let letraIngresada = prompt('Ahora ingresa una letra y te contaré cuántas veces y en qué posición está ubicada dentro de tu palabra');
let letraMayus = letraIngresada.toUpperCase();
let ubicaciones = [];

if (isNaN(letraMayus)) {  //si no es un número, busca en cada index y agrega su posición a otro array 
    let indice = 0;
    while (indice < letras.length + 1) {
        if (letras[indice] == letraMayus) {
            ubicaciones.push(indice);
            indice++;
        }
        else {
            indice++;
        }
    }
    let numeroDeVeces = ubicaciones.length;  // ahora sabremos cuántas veces está la letra y luego en qué posiciones.

    let posicionesParaUsuario = ubicaciones.map(function (suma) { return suma + 1 }); 
    //+1 a cada elemento para evitar el cero, el usuario vea posiciones que conoce

    if (numeroDeVeces == 0) {
        alert(`la letra ${letraMayus} no se encuentra en tu palabra`);
    } else {

        alert(`la letra ${letraMayus} se encuentra ${numeroDeVeces} vez(ces) y en posición(es) ${posicionesParaUsuario} de izquierda a derecha`);
    }
}
else {
    alert('el valor que ingresaste es un número, no una letra');
}
alert('Gracias por tu visita, hasta la próxima');