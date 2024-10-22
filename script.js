window.onload = () => {
    console.log("El documento ESTÁ READY PA MORIR");

    // Selecciona todas las casillas
    let casillas = document.getElementsByClassName("casilla");

    
    for (let casilla of casillas) {
        casilla.addEventListener("click", AplicarModo); 
    }
}

function obtenerFormatoCasilla() {
    let modoCasilla = document.getElementById("modoCasilla");
    let modoFila = document.getElementById("modoFila");
    let modoCol = document.getElementById("modoCol");

    if (modoCasilla.checked) {
        return "casilla";
    } else if (modoFila.checked) {
        return "filas";
    } else if (modoCol.checked) {
        return "columnas";
    }
}

function AplicarModo(event) { 
    let Modo = obtenerFormatoCasilla();
    switch (Modo) {
        case "casilla":
            MarcarCasilla(event); 
            break;
        case "filas":
            MarcarFilas(event); 
            break;
        case "columnas":
            MarcarColumnas(event); 
            break;
    }
}


function MarcarCasilla(event) {
    // `event.target` hace referencia a la casilla que fue clicada
    let casillasMarcadas = document.getElementsByClassName("CasillaChangeColor");
    for (let casilla of casillasMarcadas) {
        casilla.classList.remove("CasillaChangeColor");
    }
    let casilla = event.target;

    casilla.classList.toggle("CasillaChangeColor");
}

function MarcarFilas(event) {
    let casillasMarcadas = document.getElementsByClassName("CasillaChangeColor");
    while (casillasMarcadas.length > 0) {
        casillasMarcadas[0].classList.remove("CasillaChangeColor");
    }
    let casilla = event.target;          // La casilla que fue clicada
    let fila = casilla.parentElement;    // Obtener la fila (padre de la casilla)
    
    // Obtener todas las casillas que están dentro de la fila
    let casillasFila = fila.children;

    // Cambiar el fondo de todas las casillas en la misma fila
    for (let casilla of casillasFila) {
        casilla.classList.toggle("CasillaChangeColor");
    }
}

function MarcarColumnas(event) {

    let casillasMarcadas = document.getElementsByClassName("CasillaChangeColor");
    while (casillasMarcadas.length > 0) {
        casillasMarcadas[0].classList.remove("CasillaChangeColor");
    }
    let casilla = event.target;          // La casilla que fue clicada

    // Obtener la posiciónde la casilla

    let indiceCasilla = Array.from(casilla.parentElement.children).indexOf(casilla);

    let filas = document.getElementsByClassName("linea");

    for (let fila of filas) {
        let casillasFila = fila.children[indiceCasilla];

        casillasFila.classList.toggle("CasillaChangeColor");
    }


    
    
}




