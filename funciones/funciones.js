/**función sin argumentos sin valor de retorno*/
function saludar() {
    console.log("hola para todos");
}
//saludar();
/**función con argumentos sin valor de retorno*/
//esta función solo admite parámetros de tipo string
//tiene un valor de retorno void de forma implicita
function saludarArgumento(nombre) {
    console.log("Hola ".concat(nombre, " como est\u00E1."));
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
    return "esto es un texto";
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
function getOtroNumero() {
    return 27;
}
function getOtroTexto() {
    return "esto es otra cadena de texto";
}
/**Cuando la función no retorna nada utilizamos void*/
function sinRetorno() {
    console.log("no retorna nada");
}
/**funciones que reciben como parámetro otros
 * objetos
 */
function imprimirUsuario(usuario) {
    console.log("El usuario es: ".concat(usuario.name, " y su cargo es:\n    ").concat(usuario.cargo));
}
var nuevoUsuario = {
    name: "Juan",
    cargo: "Gerente"
};
//imprimirUsuario(nuevoUsuario);
/**también se puede llamar a la función de esta forma */
//imprimirUsuario({ name: "Paula", cargo: "Administradora" });
/**funciones con propiedades opcionales con el signo de
 * pregunta
*/
function imprimirPais(pais, capital, habitantes) {
    if (habitantes) {
        console.log("Pais: ".concat(pais, ", capital: ").concat(capital, ",\n            Cantida de habitantes: ").concat(habitantes));
    }
    else {
        console.log("Pais: ".concat(pais, ", capital: ").concat(capital));
    }
}
//imprimirPais("Colombia", "Bogotá", 52000000);
//imprimirPais("México", "Ciudad de México");
/**Uso del union type en los argumentos de la función */
function getEmpleado(nombre, edad) {
    console.log("Empleado: ".concat(nombre, ", edad: ").concat(edad, " a\u00F1os"));
}
//getEmpleado("Marina Gómez", 25);
//getEmpleado("Alvaro Pérez", "veintiseis")
/**funciones con valores por defecto */
function Empleado(nombre, cargo) {
    if (cargo === void 0) { cargo = "No asignado"; }
    console.log("Empleado: ".concat(nombre, ", Cargo:").concat(cargo));
}
Empleado("Michael Gómez");
Empleado("Alba Martinez", "Jefe de Ventas");
