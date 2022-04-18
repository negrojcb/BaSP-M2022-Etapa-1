console.log('EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril",
 "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
 "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

 console.log('Exercise 3.a:');

 var meses = ['Enero', 'Febrero', 'Marzo', 'Abril',
 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
 'Diciembre'];
 console.log('Result: ', meses[5]);
 console.log('Result: ', meses[11]);

 /* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

 console.log('Exercise 3.b:');

 console.log('Result: ', meses.sort());

 // c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
 
 console.log('Exercise 3.c:');

 var masMeses = meses.unshift('Principio');
 var MasMeses = meses.push('final');
 console.log('Result: ', meses);
 
 // d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

 console.log('Exercise 3.d:');

 var menosMeses = meses.shift();
 var menosMeses = meses.pop();
 console.log('Result: ', meses);

 // e. Invertir el orden del array (utilizar reverse).

 console.log('Exercise 3.e:');

 console.log('Result: ', meses.reverse());

/* f. Unir todos los elementos del array en un único string donde 
cada mes este separado por un guión - (utilizar join).*/

console.log('Exercise 3.f:');

console.log(meses.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('Exercise 3.g:');

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril',
 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
 'Diciembre'];
 var copyMeses = meses.slice(4, meses.length - 1);
 console.log('Result: ', copyMeses);




