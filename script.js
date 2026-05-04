function analizar() {
    let nombre = document.getElementById("nombre").value;
    let pasos = parseInt(document.getElementById("pasos").value);
    let tiempo = parseInt(document.getElementById("tiempo").value);

    let resultado = "";

    if (!nombre || isNaN(pasos) || isNaN(tiempo)) {
        resultado = "Por favor, complete todos los campos.";
    } else if (pasos > 7 && tiempo > 15) {
        resultado = "Proceso ineficiente. Se recomienda reducir pasos y optimizar tiempos.";
    } else if (pasos > 5) {
        resultado = "Proceso moderadamente eficiente. Se pueden simplificar algunos pasos.";
    } else {
        resultado = "Proceso eficiente.";
    }

    document.getElementById("resultado").innerText = resultado;
}
