var miBicicleta = {
    Marca: "Evil",  //Todo esto son propiedades del objeto miBicicleta
    Año: 2018,
    Talla: "L",
    Color: "Yogurt",
    
}

//Para acceder a una propiedad hacemos  miBicicleta.propiedad

miBicicleta.Año
miBicicleta.Marca
//"Evil"


var  miCarro = {
    Marca: "Mazda",
    Año: 2007,
    Cilindros: "4 Cilindros",
    Color: "Negro",
    Modelo: "Sedan",
    Puertas: 4,
    detallesDelCarro: function(){
        console.log(`Carro ${this.Marca} ${this.Año} ${this.Modelo} ${this.Color} ${this.Cilindros}`);

    }
}

//Si queremos que se impriman todas las propiedades, por ejemmplo miCarro
//Creamos una propiedad = function y agregamos lo siguiente por ejemplo

//      detallesDelCarro: function(); {
//          console.log(`Carro ${this.Marca} ${this.Año} ${this.Modelo} ${this.Color} ${this.Cilindros}`);
//       }
                   
//El crear una funcion dentro de un objeto es para poder imprimir todos 
// Sus propiedades y no tener que accerder una por una


var miHermana = {
    Nombre: "Paola Villarreal",
    Edad: "27 años",
    Altura: "1.90 cm",
    Genero: "Femenino",
    Complexion: "Robusta",
    Estado_Civil: "Soltera",
    informacionDeMiHermana: function() {
        console.log(`Mi hermana es: ${this.Nombre} Tiene ${this.Edad} Mide ${this.Altura} Su genero es ${this.Genero} Es ${this.Complexion} Y esta totalmente ${this.Estado_Civil} `);
    }
}

//Para agregar las `` es con ALT GR + LA TECLA DE }