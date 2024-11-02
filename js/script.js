// Variables y constantes
const tasaInteres = 5; // tasa de interés fija del 5%
let montoInicial;
let periodo;

// Funciones
function solicitarDatos() {
    montoInicial = parseFloat(prompt("Ingresa el monto inicial:"));
    periodo = parseInt(prompt("Ingresa el período en años:"));
}

function calcularInteres() {
    let montoFinal = montoInicial * (1 + tasaInteres / 100) ** periodo;
    return montoFinal.toFixed(2);
}

function mostrarResultado() {
    let montoFinal = calcularInteres();
    alert("El monto final después de " + periodo + " años será: $" + montoFinal);
}

// Flujo del simulador
function iniciarSimulador() {
    solicitarDatos();

    if (isNaN(montoInicial) || isNaN(periodo)) {
        alert("Por favor ingresa valores numéricos válidos.");
    } else {
        let confirmar = confirm("¿Deseas ver el resultado?");
        if (confirmar) {
            mostrarResultado();
            console.log("Simulación finalizada.");
        } else {
            alert("Simulación cancelada.");
        }
    }
}

// Ejecutar el simulador
iniciarSimulador();
