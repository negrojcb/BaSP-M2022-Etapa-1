window.onload = function () {

//Declaracion de variables//

var signUpInputs = document.querySelectorAll(".signup-inputs-container > input");
var name = document.getElementById('firstname');
var surname = document.getElementById('lastname');
var idNumber = document.getElementById('dni');
var birth = document.getElementById('birthdate');
var phone = document.getElementById('phonenumber');
var adress = document.getElementById('adress');
var city = document.getElementById('city');
var zip = document.getElementById('zipcode');
var email = document.getElementById('email');
var password = document.getElementById('password');
var rePassword = document.getElementById('repeatpass');
var createButton = document.getElementById('button');
var modal = document.getElementById('myModal');
var signUpDataBox = document.getElementById('boxModal');
var btnClose = document.getElementById('button-close')

/* validations */

var letters = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];


function lettersNumbers (input) {
    var inputValue = input;
    var numberOfLetters = 0
    for(var i= 0; i < inputValue.length; i++) {
        var inputName = inputValue[i];
        if (letters.indexOf(inputName) != -1) {
            numberOfLetters++;
        } else  {
            return false;
        }
    }
    return numberOfLetters;        
}

function checkNumbers (input) {
    var inputValue = input;
    var numericChar = 0;
    for(var i= 0; i < inputValue.length; i++) {
        var inputName = inputValue[i];
        if (numbers.indexOf(inputName) != -1) {
            numericChar++;
        } else  {
            return false;
        }
    }
    return numericChar;

}


function inputNameData (input) {
    var pName = document.createElement('p');
    if(lettersNumbers(input) > 3) {
        pName.innerText ='Name: ' + input;;
        return pName;
    }else {
        pName.innerText = 'Enter a valid Name please';
        return pName;
    }
}



function surnameInputData (input) {
    var pSurname = document.createElement('p');
    if (lettersNumbers(input) > 3) {
        pSurname.innerText ='Lastname: ' + input;
        return pSurname;
    } else {
        pSurname.innerText = 'Enter a valid Lastame please';
        return pSurname;
    }
}

function idInputData (input) {
    var pIdNumber = document.createElement('p')
    if(checkNumbers(input) > 7 ) {
        pIdNumber.innerText = 'ID number ' + input;
        return pIdNumber;
    } else {
        pIdNumber.innerText = 'Enter a valid ID number please';
        return pIdNumber;
    }
}

function validateBirhtDate(input){
    if(checkNumbers(input) !== 0){
        return true;
    } else {
        return false;
    }
}

function birthInputData (input) {
    var pBirth = document.createElement('p');
    if(checkNumbers(input) !== 0) {
        pBirth.innerHTML = 'Birth date: ' + input;
        return pBirth;
    } else {
        pBirth.innerHTML = 'Enter a birth date please';
        return pBirth;
    }
}
function phoneInputData (input) {
    var pPhone = document.createElement('p');
    if(checkNumbers(input) === 10 ) {
        pPhone.innerHTML = 'Phone number: ' + input;
        return pPhone;
    } else {
        pPhone.innerHTML = 'Enter a valid phone number please';
        return pPhone;
    }
}

function spaceBeforeNumber (input) {
    for(var i= 0; i < input.length; i++) {
        if(checkNumbers(input[i])){
            if(input[i-1] == " " && checkNumbers(input.substring(i+1))){
                console.log(input[i-1]);
                return true;
            } 
            
        }
    }
    return false;
}



function validateAdress (input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;
    for(var i= 0; i < inputValue.length; i++) {
        var inputName = inputValue[i]
        if (letters.indexOf(inputName) != -1) {
            numberOfLetters++;
        }else if (numbers.indexOf(inputName) != -1){
            numericChar++;
        }else if (symbols.indexOf(inputName) != -1) {
            numberOfSymbols++;
        }
    }
    
    if(numberOfLetters >= 5 && numericChar >= 5 && numberOfSymbols == 0) {
        if(spaceBeforeNumber(input)) {
            return true;
        }
    }
}

function adressInputData (input) {
    var pAdress = document.createElement('p');
    if(validateAdress(input) === true ) {
        pAdress.innerHTML = 'Adress: ' + input;
        return pAdress;
    } else {
        pAdress.innerHTML = 'Enter a valid adress please';
        return pAdress;
    }
}

function validateCity (input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;
    for(var i= 0; i < inputValue.length; i++) {
        var inputName = inputValue[i]
        if (letters.indexOf(inputName) != -1) {
            numberOfLetters++;
        }else if (numbers.indexOf(inputName) != -1){
            numericChar++;
        }else if (symbols.indexOf(inputName) != -1) {
            numberOfSymbols++;
        }
    }
    
    if(numberOfLetters > 3 && numericChar > 3 && numberOfSymbols == 0) {
        return true
    } else {
        return false
    }
    
}

function cityInputData (input) {
    var pCity = document.createElement('p');
    if(validateCity(input) === true ) {
        pCity.innerHTML = 'City: ' + input;
        return pCity;
    } else {
        pCity.innerHTML = 'Enter a valid city please';
        return pCity;
    }
}

function validateZip (input) {
    if(checkNumbers(input) >= 4 && checkNumbers(input) <= 5) {
        return true;
    } else {
        return false
    }
}

function zipInputData (input) {
    var pZip = document.createElement('p');
    if(validateZip(input) === true ) {
        pZip.innerHTML = 'Zip: ' + input;
        return pZip;
    } else {
        pZip.innerHTML = 'Enter a valid Zip code please';
        return pZip;
    }
}

function validateEmail (input) {
    var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (regularExpresion.test(input)) {
        return true;
    } else {
        return false;
    }
}

function emailInputData (input) {
    var pEmail = document.createElement('p');
    if(validateEmail(input) === true ) {
        pEmail.innerHTML = 'Email: ' + input;
        return pEmail;
    } else {
        pEmail.innerHTML = 'Enter a valid Email please';
        return pEmail;
    }
}

function validatePassword (input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;
    
    for(var i= 0; i < inputValue.length; i++) {
        var inputName = inputValue[i]
        if (letters.indexOf(inputName) != -1) {
            numberOfLetters++;
        }else if (numbers.indexOf(inputName) != -1){
            numericChar++;
        }else if (symbols.indexOf(inputName) != -1) {
            numberOfSymbols++;
        }
    }
    
    if(numberOfLetters > 4 && numericChar > 2 && numberOfSymbols === 0) {
        return true
    } else {
        return false
    }
    
}

function passwordInputData (input) {
    var pPassword = document.createElement('p');
    if(validatePassword(input) === true ) {
        pPassword.innerHTML = 'Password: ' + input;
        return pPassword;
    } else {
        pPassword.innerHTML = 'Enter a valid password please';
        return pPassword;
    }
}

function validateRePassword (input) {
    var inputValue = input;
    var numberOfLetters = 0;
    var numericChar = 0;
    var numberOfSymbols = 0;
    
    for(var i= 0; i < inputValue.length; i++) {
        var inputName = inputValue[i]
        if (letters.indexOf(inputName) != -1) {
            numberOfLetters++;
        }else if (numbers.indexOf(inputName) != -1){
            numericChar++;
        }else if (symbols.indexOf(inputName) != -1) {
            numberOfSymbols++;
        }
    }
    if(numberOfLetters > 4 && numericChar > 2 && numberOfSymbols === 0) {
        if( inputValue === password.value && inputValue !== " " ){
            return true;
        }
    }
    return false;
}

function rePasswordInputData (input) {
    var pRePassword = document.createElement('p');
    if (validateRePassword(input) === true) {
        pRePassword.innerHTML = 'Password: ' + input;
        return pRePassword;
    } else {
        pRePassword.innerHTML = 'Repeat the password please';
        return pRePassword;
    }
}

function validateForm(e) {
    switch(e.target.name) {
        case 'firstname':
            if(lettersNumbers(e.target.value) < 3) {
                
            }else {
            }
        break;
        case 'lastname': 
            if(lettersNumbers(e.target.value) < 3) {
            }else {
            }
        break;
        case 'idnumber':
            if(checkNumbers(e.target.value) < 7) {
            } else {
            }
        break;
        case 'birthdate':
            if(!(validateBirhtDate(e.target.value))) {
            } else {
            }
        break;
        case 'phonenumber':
            if(checkNumbers(e.target.value) !== 10 ) {
            } else {
            }
        break;
        case 'adress': 
            if (!(validateAdress(e.target.value))) {
            } else {
            }
        break;
        case 'city':
            if(!(validateCity(e.target.value))) {
            } else {
            }
        break;
        case'zipcode':
            if(!(validateZip(e.target.value))) {
            } else {
            }
        break;
        case 'email':
            if(!(validateEmail(e.target.value))){
            }else{
            }
        break;
        case 'password':
            if(!(validatePassword(e.target.value))) {
            }else {
            }
        break;
        case 'repeatpassword':
            if(!(validateRePassword(e.target.value))) {
            } else {
            }
    }
}



function correctError(e) {
    switch(e.target.name) {
        case 'firstname':
        break; 
        case 'lastname':
        break;
        case 'idnumber':
        break;
        case 'birthdate':
        break;
        case 'phonenumber':
        break;
        case 'adress':
        break;
        case 'city':
        break;
        case 'zipcode':
        break;
        case 'email':
        break;
        case 'password':
        break;
        case 'repeatpassword':
        break;

    }
}
var nameData = inputNameData(name.value);
var surnameData = surnameInputData(surname.value);
var idData = idInputData(idNumber.value);
var birthData = birthInputData(birth.value);
var phoneData = phoneInputData(phone.value);
var adressData = adressInputData(adress.value);
var cityData = cityInputData(city.value);
var zipData = zipInputData(zip.value);
var emailData = emailInputData(email.value);
var passwordData = passwordInputData(password.value);
var rePasswordData = rePasswordInputData(rePassword.value);

function signUpnData () {
    signUpDataBox.appendChild(nameData);
    signUpDataBox.appendChild(surnameData);
    signUpDataBox.appendChild(idData);
    signUpDataBox.appendChild(birthData);
    signUpDataBox.appendChild(phoneData);
    signUpDataBox.appendChild(adressData);
    signUpDataBox.appendChild(cityData);
    signUpDataBox.appendChild(zipData);
    signUpDataBox.appendChild(emailData);
    signUpDataBox.appendChild(passwordData);
    signUpDataBox.appendChild(rePasswordData);
    modal.classList.add('modalVisible')
    return false
}


signUpInputs.forEach(function(input){
    input.addEventListener('blur', validateForm)
    input.addEventListener('focus', correctError)
});

createButton.addEventListener('click', function(e){
    e.preventDefault();
    signUpnData(e);
})

btnClose.addEventListener('click',function (e) {
    modal.classList.remove('modalVisible');
    signUpDataBox.removeChild(nameData);
    signUpDataBox.removeChild(surnameData);
    signUpDataBox.removeChild(idData);
    signUpDataBox.removeChild(birthData);
    signUpDataBox.removeChild(phoneData);
    signUpDataBox.removeChild(adressData);
    signUpDataBox.removeChild(cityData);
    signUpDataBox.removeChild(zipData);
    signUpDataBox.removeChild(emailData);
    signUpDataBox.removeChild(passwordData);
    signUpDataBox.removeChild(rePasswordData);
})

}





