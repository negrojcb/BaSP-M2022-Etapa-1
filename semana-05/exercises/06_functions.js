console.log('EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Exercise 6.a:');

function sum (a,b) {
    return a + b;
}
var result = sum (1,2);
console.log(result);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros 
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error
 y retornar el valor NaN como resultado.*/

console.log('Exercise 6.b:');

function add (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('One of the parameters is not a number');
        return console.log('Result: ', NaN);
    }
    else { result = num1 + num2;
        return console.log(result);}       
    }
    add(1, 2); 
    add('a', 2);

/* c. Crear una función validate integer que reciba un número 
como parámetro y devuelva verdadero si es un número entero.*/

console.log('Exercise 6.c:');

function validateInteger(num) {
    if (num == parseInt(num)) {
        return console.log('True, is an integer');
        }
        else {
            return console.log('False, is not an interger')
        }
}

validateInteger(4);
validateInteger(3.14);

/* d. A la función suma del ejercicio 6b) agregarle una 
llamada que valide que los números sean enteros. En caso que
 haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

 console.log('Exercise 6.d:')

 function validateAndAdd (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('one of the parameters is not a number');
        return console.log('Result: ', NaN);
    }
    else if (num1 != parseInt(num1)) {
        alert('First is not a interger, it will be round');
        num1 = Math.round(num1);
        console.log('First now is:', num1);
    }
    else if (num2 != parseInt(num2)) {
        alert('Second is not a interger, it will be round');
        num2 = Math.round(num2);
        console.log('Second now is:', num2);
    }
    else {alert('both are numbers and intergers') }
    result = num1 + num2;
    return console.log('Result: ', result);
    }
//validateAndAdd(1,2);
validateAndAdd(1.21, 4);
//validateAndAdd(3, 4.25);
validateAndAdd(4, 3.25);

/* e. Convertir la validación del ejercicio 6d) en una función separada
 y llamarla dentro de la función suma probando que todo siga funcionando igual.*/

console.log('Exercise 6.e:');

function nestedOne (num1, num2) {

    if (num1 != parseInt(num1)) {
    alert('First is not a interger, it will be rounded');
    num1 = Math.round(num1);
    console.log('First now is:', num1);
            }
    else if (num2 != parseInt(num2)) {
    alert('Second is not a interger, it will be rounded');
    num2 = Math.round(num2);
    console.log('Second now is:', num2);
            }
    else {alert('both are numbers and intergers') }
}

 function nestedFunctions (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('one of the parameters is not a number');
        console.log('Result: ', NaN);
    }
    else {
        nestedOne(num1, num2);
    }
    result = num1 + num2;
    return console.log('Result: ', result);
}
nestedFunctions(4.2,1);