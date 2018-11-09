function validaForm(){
  //nombre
  var nombre = document.getElementById("nombre");
  if (nombre.value == "" || nombre.value == null) {
    alert("Debe ingresar el nombre.");
    nombre.style.backgroundColor = "#eceff1";
    nombre.focus();
    return false;
  } else {
    nombre.style.backgroundColor = "#fff";
  }

  //apellido
  var apellido = document.getElementById("apellido");
  if (apellido.value == "" || apellido.value == null) {
    alert("Debe ingresar el apellido.");
    apellido.style.backgroundColor = "#eceff1";
    apellido.focus();
    return false;
  } else {
    apellido.style.backgroundColor = "#fff";
  }

  //producto
  var producto = document.getElementById("producto");
  if (producto.value == "" || producto.value == null) {
    alert("Debe ingresar el producto.");
    producto.style.backgroundColor = "#eceff1";
    producto.focus();
    return false;
  } else {
    producto.style.backgroundColor = "#fff";
  }

  //cantidad
  var cantidad = document.getElementById("cantidad");
  var expCantidad = /^\d$/;
  if (cantidad.value == "" || producto.value == null) {
    alert("Debe ingresar la cantidad.");
    cantidad.style.backgroundColor = "#eceff1";
    cantidad.focus();
    return false;
  } else {
    cantidad.style.backgroundColor = "#fff";
  }
  if (!expCantidad.test(cantidad.value) /*|| cantidad.value != 0*/) {
    alert("Cantidad numerica");
    cantidad.focus();
    return false;
  }

  //mail
  var email = document.getElementById("email");
  if (email.value == "" || email.value == null) {
    alert("Debe ingresar un email.");
    email.style.backgroundColor = "#eceff1";
    email.focus();
    return false;
  } else {
    email.style.backgroundColor = "#fff";
  }

  //mensaje
  var mensaje = document.getElementById("mensaje");
  if (document.form1.mensaje.value.length == 0) {
    alert("Debe ingresar un mensaje");
    mensaje.style.backgroundColor = "#eceff1";
    mensaje.focus();
    return false;
  } else {
    mensaje.style.backgroundColor = "#fff";
  }
}
