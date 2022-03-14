// //Simulador interactivo JS: Juego de "El Colgado".

//CLASE PERSONAJE creación de personajes para Proyecto Final.

class Personaje {
    constructor(nombre, edad, ocupacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion; 
    }
}
const perso1 = new Personaje ('Homero', '39 años', 'Técnico Nuclear');
const perso2 = new Personaje ('Bart', '10 años', 'Estudiante');
const perso3 = new Personaje ('Lisa', '8 años', 'Estudiante');

const poolPersonajes = [perso1, perso2, perso3];

// DESAFIO COMPLEMENTARIO 2 INCLUYENDO OBJETOS FUNCIONES ARRAYS Y METODOS

function indexRandom(minimo, maximo) {   //los argumentos se establerán entre 0 y el número de palabras a incluir 
    var numerosPosibles = maximo + minimo;  
    var random = Math.random() * (numerosPosibles + 1);
    random = Math.floor(random);  // necesito un numero entero
    return minimo + random;
}
    
//esta funcion compara cada una de las letras de la palabra con la que debe buscar
function comparaLetras(letra){
    return letra == letraMayus;
}

const poolPalabras = ['PALABRAS', 'PRUEBA', 'JUEGO', 'COLGADO', 'PARA', 'ELEGIR','USUARIO', 'PENDIENTE', 'VERSION', 'FINAL']; 
// total de palabras aún no definido

const coincidencias = [];
//INICIO INTERACCION

alert('Hola. Hoy te mostraré un juego de palabras que estoy empezando a programar');

let eligePersonaje = parseInt(prompt('Tengo un juego de palabras. Elige entre personajes 1, 2 o 3'));

switch (eligePersonaje){
    case 1:
        alert(`Excelente, elegiste el personaje 1: ${Object.values(perso2)}`);
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
alert('A modo de demostración generaré un número al azar entre 0-10 , tengo solo 10 palabras por ahora');
let numeroAleatorio = indexRandom(0,10);
alert(`El número aleatorio generado es ${numeroAleatorio}`);

let palabra = poolPalabras[numeroAleatorio];
alert(`tu palabra aleatoria es ${palabra}`);

//transformamos el string en un array (spread operator)
const letras = [...palabra];

let letraIngresada = prompt('Ahora ingresa una letra y te contaré en qué posición está ubicada dentro de tu palabra');
let letraMayus = letraIngresada.toUpperCase();
let ubicaciones = [];

if (isNaN(letraMayus)){
    let indice = 0;
    while (indice < letras.length) {
        if (letras[indice] == letraMayus){
            ubicaciones.push(indice);
            indice++;
        }
      
        else {
            indice++;
        }
    }
    let numeroDeVeces = ubicaciones.length;
    alert(`la letra ${letraMayus} se encuentra ${numeroDeVeces} veces y en posición ${ubicaciones}`);   
}    
else { 
            alert('el valor que ingresaste es un número, no una letra');
}
             // avisamos que el valor ingresado es un numero   