//uso en el parámetro de una función
function saludar(cliente) {
    return "Hola ".concat(cliente.nombre);
}
var empleado = {
    nombre: "CARLOS",
    apellido: "GIRALDO"
};
console.log(saludar(empleado));
var Numeros = /** @class */ (function () {
    function Numeros() {
    }
    Numeros.prototype.contar = function () {
        return this.elementos[0];
    };
    return Numeros;
}());
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.paraCada = function (coleccion) {
        for (var x = 0; x < coleccion.elementos.length; x++) {
            console.log(coleccion.elementos[x]);
        }
    };
    return Global;
}());
var numeros = new Numeros();
numeros.elementos = [1, 2, 3];
Global.paraCada(numeros);
