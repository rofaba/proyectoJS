
let nombre = prompt("Hola, por favor escribe tu nombre");
alert("Hola " + nombre + " ,es un gusto conocerte.");
let rspta = prompt("Estoy aprendiendo algo nuevo, ¿te cuento? (si / no)")
if (rspta != "si") {  
    document.write ("No hay problema, tal vez en otra oportunidad.");
    document.write (" <br> ");
    document.write ("Qué tengas un buen día!!!");
}
else {
        let numero = parseInt(prompt("Hasta que número entero quieres que te cuente. Ej. 50"));
        for (let i=1; i<numero+1;i++) {
        document.write (i);
        document.write (" - ");
        }
    document.write (" <br> ");
    document.write ("Gracias, qué tengas un buen día.");     
    } 
   