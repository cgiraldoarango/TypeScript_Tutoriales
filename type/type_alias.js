//crear una función para usar el alias de tipo
function imprimirNombre(usuario) {
    console.log("El usuario se llama ".concat(usuario.nombre));
}
//una forma de usar la función
var userP = {
    nombre: "Alba Marina",
    edad: 34
};
imprimirNombre(userP);
//otra forma de usar la función
imprimirNombre({ nombre: "Paula Andrea", edad: 22 });
