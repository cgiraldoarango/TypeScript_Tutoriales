/**función sin argumentos sin valor de retorno*/
function saludar() {
    console.log("hola para todos");
}
//saludar();
/**función con argumentos sin valor de retorno*/
//esta función solo admite parámetros de tipo string
//tiene un valor de retorno void de forma implicita
function saludarArgumento(nombre: string) {
    console.log(`Hola ${nombre} como está.`)
}
//saludarArgumento("Paula Andrea")
/**Función con valor de retorno */
/**De forma implicita (inferencia de tipos) el compilador sabe que
 * se va a retornar un número; esto lo tomda
 * del valor de retorno
 */
function getNumero() {
    return 23;
}
function getTexto() {
    return "esto es un texto"
}
function getRespuesta() {
    return true;
}
//console.log(`el número es: ` + getNumero())
//console.log("el texto es: " + getTexto())
//console.log("la respuesta es: " + getRespuesta());
/**como indicar de forma explícita el valor de retorno
 * de una función
 */
function getOtroNumero(): number {
    return 27;
}
function getOtroTexto(): string {
    return "esto es otra cadena de texto"
}
/**Cuando la función no retorna nada utilizamos void*/
function sinRetorno(): void {
    console.log("no retorna nada")
}
/**funciones que reciben como parámetro otros
 * objetos
 */
function imprimirUsuario(usuario: { name: string, cargo: string }): void {
    console.log(`El usuario es: ${usuario.name} y su cargo es:
    ${usuario.cargo}`);
}

let nuevoUsuario = {
    name: "Juan",
    cargo: "Gerente"
}
//imprimirUsuario(nuevoUsuario);
/**también se puede llamar a la función de esta forma */
//imprimirUsuario({ name: "Paula", cargo: "Administradora" });
/**funciones con propiedades opcionales con el signo de
 * pregunta
*/
function imprimirPais(pais: string, capital: string,
    habitantes?: number): void {
    if (habitantes) {
        console.log(`Pais: ${pais}, capital: ${capital},
            Cantida de habitantes: ${habitantes}`)
    } else {
        console.log(`Pais: ${pais}, capital: ${capital}`)
    }
}
//imprimirPais("Colombia", "Bogotá", 52000000);
//imprimirPais("México", "Ciudad de México");
/**Uso del union type en los argumentos de la función */
function getEmpleado(nombre: string, edad: number | string) {
    console.log(`Empleado: ${nombre}, edad: ${edad} años`)
}
//getEmpleado("Marina Gómez", 25);
//getEmpleado("Alvaro Pérez", "veintiseis")
/**funciones con valores por defecto */
function Empleado(nombre: string, cargo: string = "No asignado") {
    console.log(`Empleado: ${nombre}, Cargo:${cargo}`)
}

Empleado("Michael Gómez");
Empleado("Alba Martinez", "Jefe de Ventas")
