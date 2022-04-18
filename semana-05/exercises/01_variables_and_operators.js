console.log('EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma
 para guardar el valor de la suma de ambos números en una 3er variable.*/
 
 console.log('Exercise 1.a:');

 var a = 5;
 var b = 12;
 var c = a + b;
 console.log('result: ', c);

 /* b. Crear dos variables de tipo String y concatenarlas
  guardando el resultado en una 3er variable.*/

 console.log('Exercise 1.b:');

 var myFirstName = 'Juan Cruz ';
 var myLastName = 'Bonelli';
 var myName = myFirstName + myLastName;
 console.log('result: ', myName);

 /* c. Crear dos variables de tipo String y sumar el largo de cada variable
  (cantidad de letras del string) guardando el resultado de la suma
   en una 3er variable (utilizar length).*/

 console.log('Exercise 1.c:');

 var myPet = 'Mi perro ';
 var myPetName = 'Dinamita';
 var myPetLength = myPet.length + myPetName.length;
 console.log ('Result: ', myPetLength);
