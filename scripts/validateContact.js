function validateForm() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("status").innerHTML =
      "¡Quiero conocerte, dime tu nombre!.";
    return false;
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("status").innerHTML =
      "Dime tu email para que pueda contarte mas sobre mi y mi obra.";
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.getElementById("status").innerHTML =
        "¡Ups! hay algo raro con tu Email. Revisa si esta bien escrito.";
      return false;
    }
  }
  var message = document.getElementById("message").value;
  if (message == "") {
    document.getElementById("status").innerHTML =
      "Por favor enviame un mensaje. Cuentame ¿de donde eres? ¿te gustó lo que viste? ¿te gustaría tener información sobre proximas muestras?";
    return false;
  }
  document.getElementById("status").innerHTML = "Enviando...";
  document.getElementById("contact-form").submit();
}
