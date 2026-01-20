//El let crea una variable  y el pantalla  guarda dentro de la variable 
// de pantlla y el getElementById busca en el index  el ID llamado pantalla 
let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    //El += es para agregar valores sin borrar 
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = "";
}

function calcular() {
    //El try y catch es para evitar los errores que se puedan tener al momento de escribir 
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = "Error";
    }
}