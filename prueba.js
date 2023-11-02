function filtrar(funcion) {
  //Este es el archivo que uso para hacer pruebas de código

  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  Array.prototype.filtrar = function (funcion) {
    var nuevoArreglo = [];
    for (let i = 0; i < this.length; i++) {
      if (funcion(this[i])) {
        nuevoArreglo.push(this[i]);
      }
    }
    return nuevoArreglo;
  };
}
