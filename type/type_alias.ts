//Defiendo nuestro primer type
type nombreUsuario = {
    nombre: string;
    edad: number
}
//crear una función para usar el alias de tipo
function imprimirNombre(usuario: nombreUsuario) {
    console.log(`El usuario se llama ${usuario.nombre}`)
}
let userP: nombreUsuario = {
    nombre: "Alba Marina",
    edad: 34
}
imprimirNombre(userP)