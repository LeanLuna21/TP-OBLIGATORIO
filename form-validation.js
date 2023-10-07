// Validacion de datos

const nombreUsuario = document.querySelector("[name=nombre]");
const apellidoUsuario = document.querySelector("[name=apellido]");
const mailUsuario = document.querySelector("[name=email]");

const validarCampoVacio = (mensaje, e) => {
  const campo = e.target;
  const valorCampo = e.target.value;
  // si el valor del campo es 0: trim() es una funcion de strings que corta los espacios antes y despues de los strings 
  if (valorCampo.trim().length === 0) {
    // aca le digo que le agregue esta clase:
    campo.classList.add("invalid");
    // aca le digo que le ponga el nombre de clase error al sig. elemento hno: span
    campo.nextElementSibling.classList.add("error");
    // en el siguiente marco si falta completr el campo. En css es .error
    campo.nextElementSibling.innerText = mensaje;
  } else {
    campo.classList.remove("invalid");
    campo.nextElementSibling.classList.remove("error");
    campo.nextElementSibling.innerText = "";
  }
}

const validarFormatoEmail = e => {
  const campo = e.target;
  const valorCampo = e.target.value;
  const regex = new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
  
  // si el valor del campo es 0: trim() es una funcion de strings que corta los espacios antes y despues de los strings 
  if (valorCampo.trim().length > 5 && !regex.test(valorCampo)) {
    // aca le digo que le agregue esta clase:
    campo.classList.add("invalid");
    // aca le digo que le ponga el nombre de clase error al sig. elemento hno: span
    campo.nextElementSibling.classList.add("error");
    // en el siguiente marco si falta completr el campo. En css es .error
    campo.nextElementSibling.innerText = 'Ingrese correo válido';
  } else {
    campo.classList.remove("invalid");
    campo.nextElementSibling.classList.remove("error");
    campo.nextElementSibling.innerText = "";
  }
}
  
nombreUsuario.addEventListener("blur", (e) => validarCampoVacio('Complete nombre', e));
apellidoUsuario.addEventListener("blur", (e) => validarCampoVacio('Complete apellido', e));
mailUsuario.addEventListener("blur", (e) => {
  const valorCampo = e.target.value;
  if (valorCampo.trim().length > 0) {
    validarFormatoEmail(e);
  } else{
    validarCampoVacio('Complete email', e);
  }
});

mailUsuario.addEventListener("input", validarFormatoEmail);
