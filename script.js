
/* Cree [poolPalabras] como Array base del juego, con la función (indexRandom) obtengo un número entero al azar y con ese número selecciono la palabras para jugar desde el array base */

const poolPalabras = ['palabras', 'para', 'prueba', 'juego', 'colgado', 'ultima'];

function indexRandom(minimo, maximo) {    //fx reutilizable
    var numerosPosibles = maximo - minimo;
    var random = Math.random() * (numerosPosibles + 1);
    random = Math.floor(random);         // transformación a nº entero
    return minimo + random;
}

let numeroAleatorio = indexRandom(0, 5);
let palabraSeleccionada = poolPalabras[numeroAleatorio];
const letrasArray = [...palabraSeleccionada]; //transforma el string en array

/* creo un array de guiones similar a la palabra para ser completado, se muestra al usuario en <H2> palabraAdivina */

let completandoPalabra = [];
for (let i = 0; i < letrasArray.length; i++) {
    completandoPalabra.push(' _ ');
}

document.getElementById('palabraAdivina').innerHTML = completandoPalabra.join('');  //sacamos las comas

// muestro la palabra secreta temporalmente para facilitar las pruebas del código
let probando = document.getElementById('probando');
probando.innerHTML = letrasArray;

//EMPEZANDO JUEGO
const jugar = document.getElementById('botonInicio');
jugar.addEventListener('click', jugando); //lanza la función
let vidasRestantes = 7;
let puntaje = 0;

function jugando() {
    let letraIngresada = document.getElementById('letraUsuario');
    let letra = letraIngresada.value;
    let i = 0;
    let laLetraNoEsta = true; //para ciclo cuenta de vidas
    let record = [];
    
    //verifica si la letra existe en palabra

    for (let i = 0; i < letrasArray.length; i++) {
        if (letrasArray[i] == letraIngresada.value) {
            completandoPalabra[i] = letraIngresada.value;
            record.push(i);
            laLetraNoEsta = false;
            puntaje = puntaje + (record.length * 10);

            document.getElementById('puntajeActual').innerHTML = puntaje;
            document.getElementById('palabraAdivina').innerHTML = completandoPalabra.join('');
            document.getElementById('mensajeUsuario').innerHTML = "Muy bien, tenemos coincidencias"
            document.getElementById('segundoMensaje').innerHTML = "Ingresa la siguiente letra"

            if ((completandoPalabra.includes(' _ ')) != true) {
                alert('GANASTE, tu palabra está completa')
                puntaje = puntaje + 50;
                document.getElementById('puntajeActual').innerHTML = puntaje;           
            }
        }
    }
    if (laLetraNoEsta) {
        vidasRestantes--;
        document.getElementById('numeroVidas').innerHTML = vidasRestantes;
        document.getElementById('mensajeUsuario').innerHTML = "Esa letra no está en tu palabra"
        document.getElementById('segundoMensaje').innerHTML = "En la próxima tendrás mejor suerte, vamos!"
    }
    if (vidasRestantes == 0) {
        alert('tus intentos se acabaron, PERDISTE');
    }
}