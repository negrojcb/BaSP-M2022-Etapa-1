window.onload = function() {
   //declaracion de variables//
   
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var botoncito = document.getElementById('button');
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var form = document.getElementById('login-form');
    var wrongemail = document.createElement('p');
    var textwe = document.createTextNode('Please enter a valid email');
    wrongemail.appendChild(textwe);
    
    
    //validacion de correo//
    
   email.addEventListener('blur', emailvalidation);

    function emailvalidation (e) {
        if (email.value.match(emailRegExp)){
            email.style.border = '2px solid rgba(170, 206, 155, 1)'; 
        }
        else {
            email.style.border = '2px solid red';
            //alert('Ingrese un email valido')
            form.insertBefore(wrongemail, password);
            
        }
    }
 
   //click en submit//
    botoncito.addEventListener('click', submit)

    function submit(e) {
        e.preventDefault();
        //alert('este es tu email ' + email.value);
        var alertdiv = document.createElement ('p');
        var alertemail = document.createTextNode('Your email is ' + email.value );
        var alertpass = document.createTextNode('Your password is ' + password.value);
        alertdiv.appendChild(alertemail, alertpass);
        alertdiv.style.border = '2px solid Red'; 
        form.insertBefore(alertdiv, botoncito);
    }




}