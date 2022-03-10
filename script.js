let nombre = prompt("Hola, por favor escribe tu nombre");
function despedida (){
   document.write (`No hay problema ${nombre}, tal vez en otra oportunidad.`);
   document.write (" <br> ");
   document.write ("Qué tengas un buen día!!!"); 
}
function saludaUsuario(nombre){
      alert(`Hola ${nombre} ,es un gusto conocerte`);

    }
saludaUsuario(nombre);    

let seleccion = prompt("Estoy aprendiendo muchas cosas nuevas. Puedo mostrarte los números o las letras. ¿ Qué prefieres ?  Elige: Números (N) o Letras(L)")
let rspta = seleccion.toLowerCase();

function agradecimiento (){
        document.write (" <br> ");
        document.write (" <br> ");
        document.write (`Fue entretenido, gracias ${nombre}. <br> Qué tengas un buen día.`)
}

switch (rspta ) {

    case "n":
        let numero = parseInt(prompt("Ingresa un número entero y yo te cuento. Ej. 50"));
        let i = 1; 
            while (i < numero +1) {           
                document.write (i)
                    if (i==numero) {
                    document.write (" . ")
                } else {
                document.write (" - ")
                }
        i++; 
        }   
        agradecimiento();   
    break;
    

    case "l":

        let letra = (prompt("Ingresa tu letra favorita y te muestro el alfabeto hasta ella"));
        let letraIndice = letra.toLowerCase();
        
        const letrasAlfabeto = ['a', 'b', 'c', 'ch', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        let posicionBuscada = letrasAlfabeto.indexOf(letraIndice);
        const letrasParaMostrar = letrasAlfabeto.slice (0,posicionBuscada+1);
        
        document.write (letrasParaMostrar.join(", "));

        agradecimiento();    
    break;

    default: 

    despedida();

}