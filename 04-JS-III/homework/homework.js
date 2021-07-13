// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  PrimerElemento = array[0]
  return PrimerElemento;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  UltimoElemento = array [array.length -1]
  return UltimoElemento;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  LargoDelArray = array.length
  return LargoDelArray;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayIncremento = []
  for( var y=0; y <array.length; y++){
    arrayIncremento [y] = array[y]+1;
  }
  return arrayIncremento;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // pal = palabras.join(' ')
  pal= palabras.join(' ')
  return pal;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for( var y=0; y <numeros.length; y++){
    suma = numeros[y] + suma;
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
//  resultado = agregarNumeros(resultadosTest) / resultadosTest.length
  // return resultado;
  var suma = 0;
  for( var y = 0; y < resultadosTest.length; y++){
    suma = suma + resultadosTest[y] / resultadosTest.length;
    prom = Math.round(suma);
  }
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var Max = numeros[0];
  for(var y = 1; y < numeros.length; y++){
    if(numeros[y] > Max){
      Max = numeros[y]
    }
  }
  return Max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1){
    return 0;
  }
  // else if(arguments.length === 1){
    // return arguments;
  var mult = 1
  for(var y = 0; y < arguments.length; y++){
    mult = mult * arguments[y];
  }
  return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for(var y = 0; y < arreglo.length; y++){
    if(arreglo[y] > 18){
      contador= contador + 1;
    }
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana'
  } 
  else {
    return 'Es dia Laboral'
  } 
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString()
  if(numero[0] === '9'){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var elem = arreglo[0];
  for(var y = 1; y < arreglo.length; y++){
    if(elem === arreglo[y]){
      elem = arreglo[y];
    }
    else {
      return false;
    }
  }    
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array1 = [];
  for(var y = 0; y < array.length; y++){
      if(array[y] === 'Enero' || array[y] === 'Marzo' || array[y] === 'Noviembre'){
        array1.push(array[y]) 
      }
  }  
  if(array1.length == 3){
    return array1;
  }
  return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = [];
  for(var y=0; y < array.length; y++){
      if(array[y] > 100){
        nuevoarray.push(array[y])
      }
    }
    return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoarray = [];
  var num1 = numero;
  for(var y=0; y < 10; y++){
    num1= num1 + 2;
    if(num1 === y){
      break;
    }
    else{
        nuevoarray.push(num1);
    }
  }  
  if (y < 10){
    return 'Se interrumpió la ejecución';
  }  
  else{
  return nuevoarray;
  }
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoarray = [];
  var num1 = numero;
  for(var y=0; y < 10; y++){
    if(y === 5){
      continue;
    }
    else{
      num1= num1 + 2;
      nuevoarray.push(num1);
    }
  }  
  return nuevoarray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
