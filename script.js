// //Simulador interactivo JS: Juego de "El Colgado".

// /* PENDIENTES


// Mecanismo búsqueda coincidencias. 

// Mecanismo revision triunfo o derrota en relación a sistema vidas (a definir)

// */

//creación de personajes para Proyecto Final.

// class Personaje {
//         constructor(nombre, edad, ocupacion) {
//             this.nombre = nombre;
//             this.edad = edad;
//             this.ocupacion = ocupacion; 
//         }
// }
// let perso1 = new Personaje (Homero, '39 años', 'Técnico Nuclear');
// let perso2 = new Personaje (Bart, '10 años', 'Estudiante');
// let perso3 = new Personaje (Lisa, '8 años', 'Estudiante');

// const poolPersonajes = [perso1, perso2, perso3];


// // Pool de palabras en un array 


// const palabraSecreta = []; // este array debe tener igual numero de "espacios" que la palabra escogida para mostrar a usuario

// //Generador de palabra aleatoria usando clase Math para obtener un index en un array de palabras base (pool palabras).

// //variables y funciones

// const numeroLetras = [];
// let nombre;

// TAREA ENTREGABLE 2

function indexRandom(minimo, maximo) {   //los argumentos se establerán entre 0 y el número de palabras a incluir 
    var numerosPosibles = maximo + minimo;  
    var random = Math.random() * (numerosPosibles + 1);
    random = Math.floor(random);  // necesito un numero entero
    return minimo + random;
}
function saludaUsuario() {
    alert(`Hola, te tengo un juego de palabras`);
}

//esta funcion compara cada una de las letras de la palabra con la que debe buscar
function comparaLetras(letra){
    return letra == letraMayus;
}

const poolPalabras = ['palabras', 'prueba', 'juego', 'colgado', 'para', 'elegir','usuario', 'pendiente', 'version', 'final']; // total de palabras (?)

//INICO INTERACCION

saludaUsuario()
let palabraIngresada = prompt('Ingresa una palabra para empezar el juego');
let palabra = palabraIngresada.toUpperCase();

//transformamos el string en un array (spread operator)
const letras = [...palabra];

let letraIngresada = prompt('Ahora ingresa una letra que te gustaría que buscara en tu palabra');
let letraMayus = letraIngresada.toUpperCase();

if (isNaN(letraMayus)){

        // busca la letra en la palabra y crea un nuevo array con las coincidencias, constataremos su longitud para saber aciertos
        const numeroLetras = letras.filter(comparaLetras);
        let aciertos = numeroLetras.length;

        let numeroAzar = indexRandom(0,10); //obtiene un index al azar con la funcion

        let palabraEnJuego = poolPalabras[numeroAzar];

        alert(`Tu palabra ${palabraIngresada} contiene ${aciertos} letras ${letraMayus}, La palabra al azar es ${palabraEnJuego}`);
}
        else { alert('el valor que ingresaste es un número, no una letra')}
        // avisamos que el valor ingresado es un numer