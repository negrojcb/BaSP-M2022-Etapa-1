window.onload = function () {
  //Declaracion de variables//

  var logInForm = document.getElementById("login-form");
  var logInInputs = document.querySelectorAll(".login-form > input");
  var email = document.getElementById("email");
  var alertEmail = document.getElementById("alertEmail");
  var password = document.getElementById("password");
  var alertPass = document.getElementById("alertPass");
  var logInButton = document.getElementById("button");
  var modal = document.getElementById("myModal");
  var boxModal = document.getElementById("boxModal");
  var btnClose = document.getElementById("button-close");
  var btnSend = document.getElementById("button-send");
  var msgpPass = document.getElementById("msgPass");
  var msgEmail = document.getElementById("msgEmail");
  var regExpMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  var numeros = "0123456789";
  var letras = "abcdefghyjklmnñopqrstuvwxyz";

  //Validacion Email

  function validateEmail() {
    if (email.value == "") {
      alertEmail.innerHTML = "Must complete the field";
      alertEmail.style.color = "red";
      alertEmail.style.fontSize = "15px";
      email.style.border = "2px solid red";
      return false;
    } else if (!regExpMail.test(email.value)) {
      alertEmail.innerHTML = "Invalid email";
      alertEmail.style.color = "red";
      alertEmail.style.fontSize = "15px";
      email.style.border = "2px solid red";
      return false;
    } else {
      email.style.border = "2px solid rgba(170, 206, 155, 1)";
      return true;
    }
  }

  //Validate numbers and letters

  function contieneNumerosYLetras(passval) {
    for (i = 0; i < passval.length; i++) {
      if (numeros.indexOf(passval.charAt(i), 0) == -1 && letras.toLocaleLowerCase().indexOf(param.charAt(i), 0) == -1) {
        return false;
      } else {
        return true;
      }
    }
  }

  //Validation numbers

  function haynumeros(passval) {
    for (i = 0; i < passval.length; i++) {
      if (numeros.indexOf(passval.charAt(i), 0) == -1) {
        return false;
      } else {
        return true;
      }
    }
  }

  //Validation letters

  function tieneLetras(param) {
    for (i = 0; i < param.toLowerCase().length; i++) {
      if (letras.indexOf(param.charAt(i), 0) == -1) {
        return false;
      }
    }
    return true;
  }

  //Validation Password

  function validatePassword() {
    if (password.value == "") {
      alertPass.innerHTML = "Must complete the field";
      alertPass.style.color = "red";
      alertPass.style.fontSize = "15px";
      password.style.border = "2px solid red";
      return false;
    } else if (password.value.length < 8) {
      alertPass.innerHTML = "Pasword must have at least 8 characters";
      alertPass.style.color = "red";
      alertPass.style.fontSize = "15px";
      alertPass.style.textAlign = "center";
      password.style.border = "2px solid red";
      return false;
    } else if (haynumeros(password.value)) {
      alertPass.innerHTML = "Pasword must have numbers and letters";
      alertPass.style.color = "red";
      alertPass.style.fontSize = "15px";
      alertPass.style.textAlign = "center";
      password.style.border = "2px solid red";
      return false;
    } else if (tieneLetras(password.value)) {
      alertPass.innerHTML = "Pasword must have numbers and letters";
      alertPass.style.color = "red";
      alertPass.style.fontSize = "15px";
      alertPass.style.textAlign = "center";
      password.style.border = "2px solid red";
    } else {
      password.style.border = "2px solid rgba(170, 206, 155, 1)";
      return true;
    }
  }

  //Inputs reset

  function correctFields(e) {
    switch (e.target.name) {
      case "email":
        e.target.style.border = "none";
        alertEmail.innerHTML = "";

        break;
      case "password":
        e.target.style.border = "none";
        alertPass.innerHTML = "";
        break;
    }
  }

  //Events

  email.addEventListener("blur", validateEmail);
  email.addEventListener("focus", correctFields);
  password.addEventListener("blur", validatePassword);
  password.addEventListener("focus", correctFields);

  function logInData() {
    if (validateEmail(email.value) && validatePassword(password.value)) {
      modal.classList.add("modalVisible");
      msgEmail.innerHTML = "Your mail is " + email.value;
      msgpPass.innerHTML = "your password is " + password.value;
    } else if (validateEmail(email.value) === false && validatePassword(password.value)) {
      modal.classList.add("modalVisible");
      msgEmail.innerHTML = "Your mail is invalid";
      msgpPass.innerHTML = "your password is " + password.value;
    } else if (validateEmail(email.value) && validatePassword(password.value) == false) {
      modal.classList.add("modalVisible");
      msgEmail.innerHTML = "Your mail is " + email.value;
      msgpPass.innerHTML = "your password is invalid";
    } else {
      modal.classList.add("modalVisible");
      msgEmail.innerHTML = "Your mail is invalid";
      msgpPass.innerHTML = "your password is invalid";
    }
  }

  //fecth
  const fetching = async () => {
    const request = await fetch(
      `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${password.value}`
    );
    const response = await request.json();
    if (!response.succsess) {
      alert(response.msg);
      console.log(response);
      localStorage.setItem("email", email.value);
    } else {
      alert(response.msg);
      console.log(response);
    }
  };

  logInButton.addEventListener("click", function (e) {
    e.preventDefault();
    logInData(e);
  });

  btnSend.addEventListener("click", fetching);
  btnSend.addEventListener("click", function (e) {
    modal.classList.remove("modalVisible");
    email.value = "";
    password.value = "";
    email.style.border = "none";
    password.style.border = "none";
    email.style.borderBottom = "1px solid black";
    password.style.borderBottom = "1px solid black";
    msgEmail.innerHTML = "";
    msgpPass.innerHTML = "";
  });

  btnClose.addEventListener("click", function (e) {
    modal.classList.remove("modalVisible");
    email.value = "";
    password.value = "";
    email.style.border = "none";
    password.style.border = "none";
    email.style.borderBottom = "1px solid black";
    password.style.borderBottom = "1px solid black";
    msgEmail.innerHTML = "";
    msgpPass.innerHTML = "";
  });
};
