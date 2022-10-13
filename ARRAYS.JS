var bicicletas = ["Santa Cruz", "Evil", "IBIZ", "Kona"];
                    //0            1        2      3

//Ingresar a los elementos de un array

console.log(bicicletas[0]);
//Ahi ingrese a Santa Cruz, pq es el elemento 0 del array

// .PUSH Agrega elementos al arry
// .POP Elimina elementos del array

var bicicletas = ["Evil", "Santa Cruz", "Nomad", "Giant"];
var masBicicletas = bicicletas.push("IBIZ"); //Agregue algo al array al final
var menosBicicletas = bicicletas.pop("IBIZ"); //Borre el ultimo elemento del array
var primeraBicicleta = bicicletas.unshift("Scott"); //AGREGUE SCOTT AL INICIO DEL ARRAY

var quitarPrimerBici = bicicletas.shift("Scott"); //Elimine la bici que agregue al inicio del array

var Posicion = bicicletas.indexOf("Evil"); //Me dice en que posicion esta EVIL dentro del array

