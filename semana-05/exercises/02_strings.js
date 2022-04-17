console.log('EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres
 y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

 console.log('Exercise 2.a');
 var myName = 'Juan Cruz Bonelli';
 console.log('Result: ', myName.toUpperCase());

 /* b. Crear una variable de tipo string con al menos 10 caracteres
  y generar un nuevo string con los primeros 5 caracteres guardando 
  el resultado en una nueva variable (utilizar substring).*/

 console.log('Exercise 2.b');
 var myPet = 'mi perro dinamita';
 var myPetStr = myPet.substring(0,5);
 console.log('Result: ', myPetStr);

 /* c. Crear una variable de tipo string con al menos 10 caracteres
  y generar un nuevo string con los últimos 3 caracteres guardando
   el resultado en una nueva variable (utilizar substring).*/

 console.log('Exercise 2.c');
 var myCity = 'San Nicolas de los Arroyos';
 var myCitySubS = myCity.substring(myCity.length - 3);
 console.log('Result: ', myCitySubS);

 /* d. Crear una variable de tipo string con al menos 10 caracteres
  y generar un nuevo string con la primera letra en mayúscula y las
   demás en minúscula. Guardar el resultado en una nueva variable 
   (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

 console.log('Exercise 2.d');
 var myCity = 'San Nicolas de los Arroyos';
 var myNewCity = myCity[0].toUpperCase() + myCity.substring(1).toLowerCase();
 console.log('Result: ', myNewCity);
 

 /* e. Crear una variable de tipo string con al menos 10 caracteres y algún
  espacio en blanco. Encontrar la posición del primer espacio en blanco y
   guardarla en una variable (utilizar indexOf).*/

 console.log('Exercise 2.e');
 var myCity = 'san nicolas de los arroyos';
 var myCityIndex = myCity.indexOf(' ');
 console.log('Result: ', myCityIndex);

 /* f. Crear una variable de tipo string con al menos 2 palabras largas
  (10 caracteres y algún espacio entre medio). Utilizar los métodos de
   los ejercicios anteriores para generar un nuevo string que tenga la 
   primera letra de ambas palabras en mayúscula y las demás letras en minúscula
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

 console.log('Exercise 2.f');
 var myPc = 'hewllet packard';
 var myIndex = myPc.indexOf('p');
 var myNewPc = myPc[0].toUpperCase() +  myPc.substring(1, myIndex).toLowerCase()
  + myPc[myIndex].toUpperCase() + myPc.substring(myIndex + 1).toLowerCase();
 console.log('Result: ', myNewPc);
 
