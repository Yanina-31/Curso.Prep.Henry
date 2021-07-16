// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];

  for(n in objeto){
    array.push([n,objeto[n]])
  }
return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const obj = {}

  for(let y=0; y<string.length; y++){
    if(obj.hasOwnProperty(string[y])){
      obj[string[y]] = obj[string[y]] + 1
    }else{
      obj[string[y]] = 1
    }
  }
return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";

  for(let y=0; y < s.length; y++){
    if(s.charCodeAt(y)>=65 && s.charCodeAt(y)<=90){
      mayus += s[y]
    }else{
      minus += s[y]
    }
  }
return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str1 = "";
  var str2 = "";
  for(var y=0; y<str.length; y++){
    if(str[y] !== " "){
      str1 = str[y] + str1;
    }else{
      str2 = str2 + str1 + " ";
      str1="";
    }
  }
  str2 +=str1;
  return str2;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroInv = "";
  var str = numero.toString();
 
  for(var y = str.length -1; y>=0; y--){
    numeroInv += str [y];
    }
    numeroInv = parseInt(numeroInv);
  if(numero === numeroInv){
    return "Es capicua";
  }else{
    return "No es capicua";
}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var str="";
  for(let y=0; y< cadena.length; y++){
    if(cadena[y] !== "a" && cadena[y] !== "b" && cadena[y] !== "c"){
      str += cadena[y]
    }
  }
  return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux;
  for(let y=0; y < arr.length-1; y++){
    for(let a=y+1; a < arr.length; a++){
    if(arr[y].length > arr[a].length){
      aux=arr[a];
      arr[a]=arr[y];
      arr[y]=aux;
    }
  }
} 
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array = [];
  for(var y=0; y < arreglo1.length; y ++){
    for(var a=0; a < arreglo2.length; a ++){
      if(arreglo1[y] === arreglo2[a]){
        array.push(arreglo1[y]);
      }
  }
}
array.sort(function(a,b){
  return a-b;
})
return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

