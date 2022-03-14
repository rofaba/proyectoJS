// //Simulador interactivo JS: Juego de "El Colgado"... ambientación tentativa "Los Simpsons"

// /* PENDIENTES




// Mecanismo búsqueda coincidencias. 
// Mecanismo revision triunfo o derrota en relación a sistema vidas (a definir)

// */

// //creación de personajes para Proyecto Final.

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


// // Pool de palabras

// const poolPalabras = []; // 20 palabras

// const palabraSecreta = []; // este array debe tener igual numero de espacios-guiones-equis-cuadros que la palabra escogida para mostrar a usuario

// //Generador de palabra aleatoria usando clase Math para obtener index en un array de palabras base (pool palabras).



// //variables y funciones

// const numeroLetras = [];
// let nombre;



// TAREA ENTREGABLE

function indexRandom(minimo, maximo) {
    var numerosPosibles = maximo + minimo;
    var random = Math.random() * (numerosPosibles + 1);
    random = Math.floor(random);
    return minimo + random;
}
function saludaUsuario() {
    alert(`Hola, te tengo un juego de palabras`);
}

//esta funcion compara cada una de las letras de la palabra con la que debe buscar
function comparaLetras(letra){
    return letra == letraMayus;
}

// INICIO
saludaUsuario()
let palabraIngresada = prompt('Ingresa una palabra para empezar el juego');
let palabra = palabraIngresada.toUpperCase();

//transformamos el string en un array (spread operator)
const letras = [...palabra];

let letraIngresada = prompt('Ahora ingresa la letra que te gustaría que buscara en tu palabra');
let letraMayus = letraIngresada.toUpperCase();

if (isNaN(letraMayus)){

        // busca la letra en la palabra y crea un nuevo array con las coincidencias, constataremos su longitud para saber aciertos
        const numeroLetras = letras.filter(comparaLetras);
        let aciertos = numeroLetras.length;

        let numeroAzar = indexRandom(0,20)
        alert(`Tu palabra ${palabraIngresada} contiene ${aciertos} letras ${letraMayus} número al azar es ${numeroAzar}`);

}

        else { alert('el valor que ingresaste es un número, no una letra')}
        // avisamos que el valor ingresado es un numero   
      
        