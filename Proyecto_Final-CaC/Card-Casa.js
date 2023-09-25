// Función boton 1
//
document.getElementById("mostrarFormulario").addEventListener("click", function() {
    var formulario = document.getElementById("FormContainer");
    formulario.style.display = "inline-block";
});

// Función boton 2
//
document.getElementById("mostrarForm").addEventListener("click", function() {
    var formulario = document.getElementById("FormContainer");
    formulario.style.display = "inline-block";
});


// Función boton Cerrar Formulario
//
document.getElementById("ocultarForm").addEventListener("click", function() {
    var formulario = document.getElementById("FormContainer");
    formulario.style.display = "none";
});