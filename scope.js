//Scope Global 
var nombre = "Alex";

//Scope Local  Lo que esta dentro de una funcion

function fun();{
    var apellido = "Villarreal";
    return nombre + "" + apellido;  //Las " " son espacios
}

//El scope global puede acceder a lo que esta en local
//El scope local puede usar variables del global y locales de la funcion

//Concatenar es juntar o sea, nombre + " " + apellido = "Alejandro Villarreal"

