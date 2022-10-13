function auto (marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

//Para crear un objeto nuevo con las propiedades de uno usamos NEW como aqui abajo

var autoNuevo = new auto("Mazda", "Sedan", 2018);

var autoNuevo2 = new auto("Nissan", "Cordova", 2020);

//variable carro2 = new auto (Propiedades a agegar segun la funcion auto)


function bicicleta (Marca, Año, Color) {
    this.Marca = Marca;                                           //Creamos la funcion bicicleta 
    this.Año = Año;
    this.Color = Color;
}

var bicis = []                                      //Creamos un array de bicis

for (var i = 0; i < 2; i++) {                                       //Mientras que i sea menor que 2, se crearan 2 bicis nuevas
    var Marca = prompt ("Ingresa la marca de la bicicleta");
    var Año = prompt ("Ingresa el año de la bicicleta");
    var Color = prompt ("Ingresa el color de la bicicleta");

    bicis.push(new bicicleta(Marca, Año, Color));                       //Se agregan al array empezando de la posicion 0

}

for(var i = 0; i < 2; i++) {                    //Nos imprime las bicicletas
    console.log(bicicleta[i]);
}

console.log("bicis");


//EJEMPLO CREADO X MI



function vapes (Modelo, Sistema, OHM) {     //Cremos el objeto con sus propiedades
    this.Modelo = Modelo;
    this.Sistema = Sistema;
    this.OHM = OHM;
}

var chichus = []                            //Hacemos un array para los chichus

for(var i = 0; i < 2; i++) {
    var Modelo = prompt ("Ingresa el modelo del vape");
    var Sistema = prompt ("Ingresa el sistema que quieren en el vape");         //Se crearan 2 chichus a partir del 0 o sease 0 y 1 en eln array
    var OHM = prompt ("Ingresa la cantidad de OHMS en tu chichu");

chichus.push(new vapes(Modelo, Sistema, OHM));                  //Se agregan al array
}

for(var i = 0; i < 2; i++);                     //Se imprimen y quedan lsitos en al array
console.log(vapes[i]);

console.log(vapes);

