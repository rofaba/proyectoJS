
/* Se tiene poolPalabras como Array base del juego, con la función indexRandom obtenemos un número entero al azar y con el mismo se selecciona una de las palabras del array base, con esa palabra se juega */

const poolPalabras = ['palabras', 'para', 'prueba', 'juego', 'colgado'];

function indexRandom(minimo, maximo) {
    var numerosPosibles = maximo - minimo;
    var random = Math.random() * (numerosPosibles + 1);
    random = Math.floor(random);  // transformación a numero entero
    return minimo + random;
}

let numeroAleatorio = indexRandom(0, 5);
let palabraSeleccionada = poolPalabras[numeroAleatorio];
const letrasArray = [...palabraSeleccionada]; //transformamos el string en un array

/* creamos un array con igual número de letras que la palabra seleccionada, lleno de guiones para completar. Lo mostramos al usuario en H2 palabraAdivina */

let completandoPalabra = []; 
       for (let i = 0; i < letrasArray.length; i++) {
        completandoPalabra.push(' _ ');
    }

let palabraGuiones = document.getElementById('palabraAdivina');
palabraGuiones.innerHTML = completandoPalabra;  

//XXX
let probando = document.getElementById('probando');
probando.innerHTML = letrasArray;
//XXX

//Variables globales
let vidasPendientes;
let contadorAciertos = 0;

//EMPEZANDO JUEGO
const jugar = document.getElementById('botonInicio');
jugar.addEventListener('click', jugando);
let vidasRestantes = 7;

function jugando(){
let letraIngresada = document.getElementById('letraUsuario');
let letra = letraIngresada.value;
let i=0;
let laLetraNoEsta = true;

//verifica si la letra existe en palabra
       
for (let i = 0; i < letrasArray.length; i++) {
    if (letrasArray[i] == letraIngresada.value) {
        completandoPalabra[i] = letraIngresada.value;
        laLetraNoEsta = false;
        document.getElementById('palabraAdivina').innerHTML = completandoPalabra;
        if((completandoPalabra.includes(' _ ')) != true){
            alert('GANASTE, tu palabra está completa')
        }
    } 
}
if (laLetraNoEsta) {
    vidasRestantes--;
    document.getElementById('numeroVidas').innerHTML = vidasRestantes;
    }
    if (vidasRestantes == 0) {
       alert('tus intentos se acabaron, PERDISTE'); 
    }
}




// if (contadorAciertos == 0){
//     let mensaje = document.getElementById('mensajeUsuario')
//     let mensajeDos = document.getElementById('segundoMensaje');
            
//     mensaje.innerHTML = `la letra no se encuentra en tu palabra`;
//     mensajeDos = innerHTML = 'Ingresa otra letra';        
//     intentosPendientes--;
//     
// }
      
// let palabraSecreta = document.getElementById('palabraAdivina');
// palabraSecreta.innerHTML = llenandoPalabra;  


// //revisa aciertos vs vidas
//     if (contadorAciertos == 0) {  // la letra no está en la palabra
//             vidas--
//             let mensaje = document.getElementById('mensajeUsuario')
//             let mensajeDos = document.getElementById('segundoMensaje');
//             let loose = document.getElementById('numeroVidas');
//             mensaje.innerHTML = `la letra ${letraIngresada} no se encuentra en tu palabra`;
//             mensajeDos = innerHTML = 'Ingresa otra letra';
//             loose.innerHTML = vidas - 1;
//         }
//         else {
//             palabraSecreta.innerHTML = llenandoPalabra;
//         }


// //Informa avance del juego 

//         if (vidas == 0) { //el juego terminò por vidas en cero
//             mensaje.innerHTML = 'No te quedan más vidas';
//             mensajeDos.innerHTML = `Fin del juego, tú palabra era ${palabra}`
//         }
//         else { //el juego terminó por palabra completa

//             let cierre = document.getElementById('segundoMensaje');
//             cierre.innerHTML = `GANASTE, tu palabra ${palabra} está completa!!!`;
//             indice = 50; // termino de ciclo 
//             vidas = 0; // termino de ciclo
