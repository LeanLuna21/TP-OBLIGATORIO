// Validacion de datos

const nombreUsuario = document.querySelector("[name=nombre]");
const apellidoUsuario = document.querySelector("[name=apellido]");
const mailUsuario = document.querySelector("[name=email]");


nombreUsuario.addEventListener('blur', function (e){
    const campo = e.target;
    const valorCampo = e.target.value;
    // si el valor del campo es 0:
    if (valorCampo.length === 0) {
        // aca le digo que le agregue esta clase:
        campo.classList.add('invalid');
        // aca le digo que le ponga el nombre de clase error al sig. elemento hno: span
        campo.nextElementSibling.classList.add('error');
        // en el siguiente marco si falta completr el campo. En css es .error
        campo.nextElementSibling.innerText = 'Campo requerido';
    }
})
apellidoUsuario
mailUsuario