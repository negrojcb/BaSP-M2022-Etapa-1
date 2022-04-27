window.onload = function() {
  
   
    var logInForm = document.getElementById("login-form");
    var logInInputs = document.querySelectorAll(".login-form > input");
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var logInButton = document.getElementById('button');
    var modal = document.getElementById('myModal');
    var boxModal = document.getElementById('boxModal');
    var btnClose = document.getElementById('button-close')
    var passmsg = document.createElement('p');
    var emailmsg = document.createElement('p');
    var wrongEmail = document.createElement('p');
    var wrongPass = document.createElement('p');
    var textWrongEmail = document.createTextNode('Please enter a valid email');
    var textWrongPass = document.createTextNode('Please enter a valid password');


    
    
    

var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];

    var numbers = ["0","1","2","3","4","5","6","7","8","9"];

    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
    
    function validateEmail (input) {
        var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (regularExpresion.test(input)) {
            return true;
        } else {
            return false;
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
    
    function validateForm(e){
        switch(e.target.name) {
            case 'email':
                if(!(validateEmail(e.target.value))){
                    wrongEmail.appendChild(textWrongEmail);
                    email.insertAdjacentElement("afterend", wrongEmail);
                }else{
                    email.style.border = '2px solid green';
                }
            break;
            case 'password':
                if(validatePassword(e.target.value) == false || e.target.value.length < 8 || e.target.value.length  > 10) {
                    wrongPass.appendChild(textWrongPass);
                    password.insertAdjacentElement('afterend', wrongPass);
                }else {
                    password.style.border = '2px solid green';
                }
            break;
        }
        
    }
    
    function correctError(e) {
        switch(e.target.name) {
            case 'email':
                email.value = '';
                textWrongEmail.parentNode.removeChild(textWrongEmail);
            break; 
            case 'password':
                password.value = '';
                textWrongPass.parentNode.removeChild(textWrongPass);
            break;
        }
    }
    
    logInInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
        input.addEventListener('focus', correctError)
    });
    
    function logInData() {
        if(validateEmail(email.value) && validatePassword(password.value)) {
            modal.classList.add('modalVisible');
            var emailmsgtext = document.createTextNode ('Your email is ' + email.value);
            emailmsg.appendChild(emailmsgtext);
            boxModal.appendChild(emailmsg);
            var passmsgtext = document.createTextNode ('Your password is ' + password.value);
            passmsg.appendChild(passmsgtext);
            boxModal.appendChild(passmsg);

        } else if(validateEmail(email.value) === false && validatePassword(password.value)) {
            modal.classList.add('modalVisible');
            var emailmsgtext = document.createTextNode ('Your email is invalid');
            emailmsg.appendChild(emailmsgtext);
            boxModal.appendChild(emailmsg);
           
        } else if (validateEmail(email.value) && validatePassword(password.value) == false) {
            modal.classList.add('modalVisible');
            var passmsgtext = document.createTextNode ('Your password is invalid');
            passmsg.appendChild(passmsgtext);
            boxModal.appendChild(passmsg);
        }else {
            modal.classList.add('modalVisible');
            var emailmsgtext = document.createTextNode ('Your email is invalid');
            emailmsg.appendChild(emailmsgtext);
            boxModal.appendChild(emailmsg);
            var passmsgtext = document.createTextNode ('Your password is invalid');
            passmsg.appendChild(passmsgtext);
            boxModal.appendChild(passmsg);
        }
        
    }
    
    logInButton.addEventListener('click', function(e){
        e.preventDefault();
        logInData(e);
        
    })

    btnClose.addEventListener('click',function (e) {
        modal.classList.remove('modalVisible');
        passmsgtext.parentNode.removeChild(passmsgtext);
        emailmsgtext.parentNode.removeChild(emailmsgtext);
        email.value = '';
        password.value = "";
  
    })
    
    


}