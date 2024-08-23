// Funciones para actualizar los valores visuales de los sliders
function updateAnchoValue() {
    document.getElementById("anchoValue").textContent = document.getElementById("ancho").value;
}

function updateLargoValue() {
    document.getElementById("largoValue").textContent = document.getElementById("largo").value;
}

function updateEspesorValue() {
    document.getElementById("espesorValue").textContent = parseFloat(document.getElementById("espesor").value).toFixed(3);
}

// Función para realizar los cálculos
function calcular() {
    const ancho = parseFloat(document.getElementById("ancho").value);
    const largo = parseFloat(document.getElementById("largo").value);
    const espesor = parseFloat(document.getElementById("espesor").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const tipoCantidad = document.getElementById("tipo").value;

    // Peso de una bolsa
    const pesoUnaBolsa = ancho * largo * espesor * 0.093 * 2;
    document.getElementById("pesoUnaBolsa").textContent = pesoUnaBolsa.toFixed(4);

    // Peso de un paquete de 10 bolsas
    const pesoPaquete = pesoUnaBolsa * 10;
    document.getElementById("pesoPaquete").textContent = pesoPaquete.toFixed(2);

    // Paquetes por saco
    const maxPesoSaco = 20.0;
    const paquetesPorSaco = Math.floor(maxPesoSaco / pesoPaquete) * 10;
    document.getElementById("paquetesPorSaco").textContent = paquetesPorSaco;

    // Cantidad de sacos
    let cantidadSacos;
    if (tipoCantidad === "unidades") {
        const totalPaquetes = Math.floor(cantidad / 10);
        cantidadSacos = Math.floor(totalPaquetes / paquetesPorSaco);
    } else if (tipoCantidad === "kilos") {
        const totalPaquetes = Math.floor(cantidad / pesoPaquete);
        cantidadSacos = Math.floor(totalPaquetes / paquetesPorSaco);
    }
    document.getElementById("cantidadSacos").textContent = cantidadSacos;
}
