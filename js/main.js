//alert("Hola mundo!!!!");
//console.log("Este es otro mensaje");

var nombre = "Brandon Gala";
let edad = 9;
//edad="No quiero decirlo";
let titulo = document.getElementById('titulo');
let mensaje = "Mi nombre es: "+nombre+" Mi edad es: "+(edad+12);
console.log(mensaje);

let boton = document.getElementById('boton');

titulo.innerHTML = mensaje;
titulo.style.color = "#0000ff";
titulo.style.textTransform = "uppercase";

titulo.onclick = function(){
    titulo.innerHTML = "Le distes clic";
    titulo.innerHTML = titulo.innerHTML.toLowerCase();
};

boton.onclick = function(){
    boton.innerHTML = "Le distes clic al boton xd";
    boton.style.color = "#ffffff";
    boton.style.background = "#000000";
};