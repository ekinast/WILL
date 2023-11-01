/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var simetrico = Boolean;
  var inversoString = "";
  var inverso = 0;
  var numToString = "";

  numToString = num.toString(); /*Convierto el número a string*/
  inversoString = numToString
    .split("") /* Lo conviero en array*/
    .reverse() /* Invierto el array*/
    .join(""); /* Lo convierto en string*/
  inverso = parseInt(inversoString); /*Paso el string a número entero*/
  /* Comparo el número y su inverso */
  return num === inverso;
}

/*numeroSimetrico(11711);*/
// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico;
