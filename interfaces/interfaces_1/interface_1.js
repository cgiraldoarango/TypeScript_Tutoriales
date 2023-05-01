//uso en el parámetro de una función
function saludar(cliente) {
    return "Hola ".concat(cliente.nombre);
}
var persona1 = {
    nombre: "CARLOS",
    apellido: "GIRALDO"
};
console.log(saludar(persona1));
