//DESAFIO LOCAL STORAGE
//guarda número de intentos que quedan
function guardarVidas (vidas, valor) {
    localStorage.setItem( vidas, valor);
    }
    
    //lee el número de intentos que quedan
    function leerVidas (vidas) {
    let vidasGuardadas = localStorage.getItem (vidas);
    return parseInt(vidasGuardadas)
    }
    
    //limpia el LocalStorage para un nuevo juego
    function limpiarStorage(){
    localStorage.clear();
    }