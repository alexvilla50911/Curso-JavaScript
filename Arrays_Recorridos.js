var articulos = [
    { nombre: "Bicicleta", precio: 2500 },
    { nombre: "Television", precio: 3000 },
    { nombre: "Libro", precio: 300},
    { nombre: "Celular", precio: 10000},
    { nombre: "Laptop", precio: 3300},
    { nombre: "Teclado", precio: 500},
    { nombre: "Audifonos", precio: 1500},
]

//Filtrar la lista para obtener datos especificos  con .filter 

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 500                                   //Me va a regresar los articulos menores o iguales a 500 pesos.
});


//Metodo de MAP, nos ayuda a mapear articulos 

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre                              //En este caso nos da solo los nombres
});


var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"             //Se genera un array regresando solo el nombre Laptop y su precio 
});


articulos.forEach(function(articulo){       //For each sirve para traernos lo que le pidamos a CADA elemento del array 
    console.log(articulo.nombre);           //En este caso usamos el .nombre y nos devuelve todos los nombres
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 1500;
});