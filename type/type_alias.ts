//Defiendo nuestro primer type
/**Los type permiten reutilizar código */
type nombreUsuario = {
    nombre: string;
    edad: number
}
//crear una función para usar el alias de tipo
function imprimirNombre(usuario: nombreUsuario) {
    console.log(`El usuario se llama ${usuario.nombre}`)
}
//una forma de usar la función
let userP: nombreUsuario = {
    nombre: "Alba Marina",
    edad: 34
}
imprimirNombre(userP)
//otra forma de usar la función
imprimirNombre({ nombre: "Paula Andrea", edad: 22 })
/**Definiendo types con atributos opcionales */

type Empleado = {
    nombre: string,
    edad?: number,
    ciudad: string
}
function datosEmpleado(empleado: Empleado) {
    console.log(`El empleado se llama ${empleado.nombre} 
    y tiene ${empleado.edad}`)
}
//llamando a la función datosEmpleado
datosEmpleado({ nombre: "Carmenza Gómez", edad: 55, ciudad: "Bogotá" })

let nuevoEmpleado: Empleado = {
    nombre: "Gonzalo",
    ciudad: "Cali"
}
datosEmpleado(nuevoEmpleado)