//crear una función para usar el alias de tipo
function imprimirNombre(usuario) {
    console.log("El usuario se llama ".concat(usuario.nombre));
}
var userP = {
    nombre: "Alba Marina",
    edad: 34
};
imprimirNombre(userP);
