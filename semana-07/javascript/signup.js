window.onload = function () {
  var signUpInputs = document.querySelectorAll(".signup-inputs-container > input");
  var name = document.getElementById("firstname");
  var surname = document.getElementById("lastname");
  var idNumber = document.getElementById("dni");
  var birth = document.getElementById("birthdate");
  var phone = document.getElementById("phonenumber");
  var adress = document.getElementById("adress");
  var city = document.getElementById("city");
  var zip = document.getElementById("zipcode");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var rePassword = document.getElementById("repeatpass");
  var createButton = document.getElementById("button");
  var modal = document.getElementById("myModal");
  var signUpDataBox = document.getElementById("boxModal");
  var btnSend = document.getElementById("button-close");
  var btnClose = document.getElementById("button-back");
  var firstnameMsg = document.getElementById("firstnameMsg");
  var lastNameMsg = document.getElementById("lastNameMsg");
  var dniMsg = document.getElementById("dniMsg");
  var birthdateMsg = document.getElementById("birthdateMsg");
  var phonenumberMsg = document.getElementById("phonenumberMsg");
  var adressMsg = document.getElementById("adressMsg");
  var cityMsg = document.getElementById("cityMsg");
  var zipcodeMsg = document.getElementById("zipcodeMsg");
  var emailMsg = document.getElementById("emailMsg");
  var passwordMsg = document.getElementById("passwordMsg");
  var repeatpasswordMsg = document.getElementById("repeatpasswordMsg");

  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var symbols = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "/",
    "(",
    ")",
    "=",
    "?",
    "¡",
    "¿",
    "+",
    "*",
    "[",
    "]",
    "{",
    "}",
    "-",
    ".",
    "@",
  ];

  function lettersNumbers(input) {
    var inputValue = input;
    var numberOfLetters = 0;
    for (var i = 0; i < inputValue.length; i++) {
      var inputName = inputValue[i];
      if (letters.indexOf(inputName) != -1) {
        numberOfLetters++;
      } else {
        return false;
      }
    }
    return numberOfLetters;
  }

  function checkNumbers(input) {
    var inputValue = input;
    var numericChar = 0;
    for (var i = 0; i < inputValue.length; i++) {
      var inputName = inputValue[i];
      if (numbers.indexOf(inputName) != -1) {
        numericChar++;
      } else {
        return false;
      }
    }
    return numericChar;
  }

  function validateBirhtDate(input) {
    if (checkNumbers(input) !== 0) {
      return true;
    } else {
      return false;
    }
  }

  function spaceBeforeNumber(input) {
    for (var i = 0; i < input.length; i++) {
      if (checkNumbers(input[i])) {
        if (input[i - 1] == " " && checkNumbers(input.substring(i + 1))) {
          return true;
        }
      }
    }
    return false;
  }

  function validateAdress(input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;
    for (var i = 0; i < inputValue.length; i++) {
      var inputName = inputValue[i];
      if (letters.indexOf(inputName) != -1) {
        numberOfLetters++;
      } else if (numbers.indexOf(inputName) != -1) {
        numericChar++;
      } else if (symbols.indexOf(inputName) != -1) {
        numberOfSymbols++;
      }
    }

    if (numberOfLetters >= 5 && numericChar >= 1 && numberOfSymbols == 0) {
      if (spaceBeforeNumber(input)) {
        return true;
      }
    }
  }

  function validateCity(input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;
    for (var i = 0; i < inputValue.length; i++) {
      var inputName = inputValue[i];
      if (letters.indexOf(inputName) != -1) {
        numberOfLetters++;
      } else if (numbers.indexOf(inputName) != -1) {
        numericChar++;
      } else if (symbols.indexOf(inputName) != -1) {
        numberOfSymbols++;
      }
    }

    if (numberOfLetters > 3 && numberOfSymbols == 0) {
      return true;
    } else {
      return false;
    }
  }

  function validateZip(input) {
    if (checkNumbers(input) >= 4 && checkNumbers(input) <= 5) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(input) {
    var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (regularExpresion.test(input)) {
      return true;
    } else {
      return false;
    }
  }

  function validatePassword(input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;

    for (var i = 0; i < inputValue.length; i++) {
      var inputName = inputValue[i];
      if (letters.indexOf(inputName) != -1) {
        numberOfLetters++;
      } else if (numbers.indexOf(inputName) != -1) {
        numericChar++;
      } else if (symbols.indexOf(inputName) != -1) {
        numberOfSymbols++;
      }
    }

    if (numberOfLetters > 4 && numericChar > 2 && numberOfSymbols === 0) {
      return true;
    } else {
      return false;
    }
  }

  function validateRePassword(input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;

    for (var i = 0; i < inputValue.length; i++) {
      var inputName = inputValue[i];
      if (letters.indexOf(inputName) != -1) {
        numberOfLetters++;
      } else if (numbers.indexOf(inputName) != -1) {
        numericChar++;
      } else if (symbols.indexOf(inputName) != -1) {
        numberOfSymbols++;
      }
    }
    if (numberOfLetters > 4 && numericChar > 2 && numberOfSymbols === 0) {
      if (inputValue === password.value && inputValue !== " ") {
        return true;
      }
    }
    return false;
  }

  function validateForm(e) {
    switch (e.target.name) {
      case "firstname":
        if (lettersNumbers(e.target.value) < 3) {
          firstnameMsg.innerHTML = "Name must have at least 3 letters";
          firstnameMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "lastname":
        if (lettersNumbers(e.target.value) < 3) {
          lastNameMsg.innerHTML = "Name must have at least 3 letters";
          lastNameMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "idnumber":
        if (checkNumbers(e.target.value) < 7) {
          dniMsg.innerHTML = "Name must have at least 7 numbers";
          dniMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "birthdate":
        if (!validateBirhtDate(e.target.value)) {
          birthdateMsg.innerHTML = "Please enter a valid date";
          birthdateMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "phone":
        if (checkNumbers(e.target.value) !== 10) {
          phonenumberMsg.innerHTML = "Phone must have 10 numbers";
          phonenumberMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "adress":
        if (!validateAdress(e.target.value)) {
          adressMsg.innerHTML = "Name must have at least 3 letters";
          adressMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "city":
        if (!validateCity(e.target.value)) {
          cityMsg.innerHTML = "City must have at least 3 letters";
          cityMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "zipcode":
        if (!validateZip(e.target.value)) {
          zipcodeMsg.innerHTML = "Zip Code must have min 4 numbers and max 5 numbers";
          zipcodeMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "email":
        if (!validateEmail(e.target.value)) {
          emailMsg.innerHTML = "enter a valid email";
          emailMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "password":
        if (!validatePassword(e.target.value)) {
          passwordMsg.innerHTML = "Password must have at least 8 alphanumeric characters";
          passwordMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
        break;
      case "repeatpassword":
        if (!validateRePassword(e.target.value)) {
          repeatpasswordMsg.innerHTML = "Password must be the same in both fields";
          repeatpasswordMsg.style.color = "red";
          e.target.classList.add("input-error");
        } else {
          e.target.classList.add("input-rigth");
        }
    }
  }

  function correctError(e) {
    switch (e.target.name) {
      case "firstname":
        firstnameMsg.innerHTML = "";
        break;
      case "lastname":
        lastNameMsg.innerHTML = "";
        break;
      case "idnumber":
        dniMsg.innerHTML = "";
        break;
      case "birthdate":
        birthdateMsg.innerHTML = "";
        break;
      case "phone":
        phonenumberMsg.innerHTML = "";
        break;
      case "adress":
        adressMsg.innerHTML = "";
        break;
      case "city":
        cityMsg.innerHTML = "";
        break;
      case "zipcode":
        zipcodeMsg.innerHTML = "";
        break;
      case "email":
        emailMsg.innerHTML = "";
        break;
      case "password":
        passwordMsg.innerHTML = "";
        break;
      case "repeatpassword":
        repeatpasswordMsg.innerHTML = "";
        break;
    }
  }

  signUpInputs.forEach((input) => {
    input.addEventListener("blur", validateForm);
    input.addEventListener("focus", correctError);
  });

  function signUpnData() {
    document.getElementById("alert-name").innerHTML = name.value;
    document.getElementById("alert-lastname").innerHTML = surname.value;
    document.getElementById("alert-dni").innerHTML = idNumber.value;
    document.getElementById("alert-birthdate").innerHTML = birth.value;
    document.getElementById("alert-phone").innerHTML = phone.value;
    document.getElementById("alert-adress").innerHTML = adress.value;
    document.getElementById("alert-city").innerHTML = city.value;
    document.getElementById("alert-zip").innerHTML = zip.value;
    document.getElementById("alert-email").innerHTML = email.value;
    document.getElementById("alert-pass").innerHTML = password.value;
    document.getElementById("alert-repass").innerHTML = rePassword.value;
    modal.classList.add("modalVisible");
    return false;
  }

  createButton.addEventListener("click", function (e) {
    e.preventDefault();
    signUpnData(e);
  });

  btnClose.addEventListener("click", function (e) {
    modal.classList.remove("modalVisible");
    signUpInputs.forEach((input) => {
      input.value = "";
      input.style.border = "none";
      input.style.borderBottom = "1px solid black";
    });
  });

  //fecth
  function fetching() {
    fetch(
      "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" +
        name.value +
        "&lastName=" +
        surname.value +
        "&dni=" +
        idNumber.value +
        "&dob=" +
        birth.value +
        "&phone=" +
        phone.value +
        "&address=" +
        adress.value +
        "&city=" +
        city.value +
        "&zip=" +
        zip.value +
        "&email=" +
        email.value +
        "&password=" +
        password.value
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonResponse) {
        alert(jsonResponse.msg);
        localStorage.setItem("Name", jsonResponse.data.name);
        localStorage.setItem("Lastname", jsonResponse.data.lastName);
        localStorage.setItem("Idnumber", jsonResponse.data.dni);
        localStorage.setItem("DoB", jsonResponse.data.dob);
        localStorage.setItem("Phone", jsonResponse.data.phone);
        localStorage.setItem("Address", jsonResponse.data.address);
        localStorage.setItem("City", jsonResponse.data.city);
        localStorage.setItem("Zip", jsonResponse.data.zip);
        localStorage.setItem("Email", jsonResponse.data.email);
        localStorage.setItem("Password", jsonResponse.data.password);
      })
      .catch(function (jsonResponse) {
        alert(jsonResponse.msg);
      });
  }

  btnSend.addEventListener("click", fetching);
  btnSend.addEventListener("click", function (e) {
    modal.classList.remove("modalVisible");
  });
  btnSend.addEventListener("click", function (e) {
    signUpInputs.forEach((input) => {
      input.value = "";
      input.style.border = "none";
      input.style.borderBottom = "1px solid black";
    });
  });

  function recharge() {
    if (typeof Storage !== "undefined") {
      name.value = localStorage.getItem("Name");
      surname.value = localStorage.getItem("Lastname");
      idNumber.value = localStorage.getItem("Idnumber");
      birth.value = localStorage.getItem("DoB");
      phone.value = localStorage.getItem("Phone");
      adress.value = localStorage.getItem("Address");
      city.value = localStorage.getItem("City");
      zip.value = localStorage.getItem("Zip");
      email.value = localStorage.getItem("Email");
      password.value = localStorage.getItem("Password");
      rePassword.value = localStorage.getItem("Password");
    }
  }
  recharge();
};
