function despedida() {
    document.write(`No hay problema ${nombre}, tal vez en otra oportunidad.`);
    document.write(" <br> ");
    document.write("Qué tengas un buen día!");
}
function saludaUsuario(nombre) {
    alert(`Hola ${nombre} ,es un gusto conocerte`);

}
function agradecimiento() {
    document.write(" <br> ");
    document.write(" <br> ");
    document.write(`Fue entretenido, gracias ${nombre}. <br> Qué tengas un buen día.`)
}

let nombre = prompt("Hola, por favor escribe tu nombre");

saludaUsuario(nombre);

let seleccion = prompt("Estoy aprendiendo muchas cosas nuevas. Puedo mostrarte los números o las letras. ¿ Qué prefieres ?. Elige: Números (N) o Letras(L)")
let rspta = seleccion.toLowerCase();

switch (rspta) {

    case "n":
        let numero = parseInt(prompt("Ingresa un número entero y yo te cuento. Ej. 50"));
        if (isNaN (numero)) {
            document.write ('El valor ingresado no es un número. Lo siento, pero no te puedo contar');
            }
        else {
            let i = 1;
            while (i < numero + 1) {
            document.write(i)
                if (i == numero) {
                document.write(" . ")
                } else {
                document.write(" - ")
            }
            i++;
        }
        agradecimiento();
        }
        break;

    case "l":

        let letra = (prompt("Ingresa tu letra favorita y te muestro el alfabeto hasta ella"));
        let letraIndice = letra.toUpperCase();

        const letrasAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let posicionBuscada = letrasAlfabeto.indexOf(letraIndice);

        if (posicionBuscada == -1) {
            document.write("El caracter ingresado no es una letra. Lo siento, no puedo mostrártelas.")
        }
        else {
            const letrasParaMostrar = letrasAlfabeto.slice(0, posicionBuscada + 1);

            document.write(letrasParaMostrar.join(", "));

            agradecimiento();
        }
        break;

    default:

        document.write('Esa alternativa no la reconozco, lo siento 😭');

}