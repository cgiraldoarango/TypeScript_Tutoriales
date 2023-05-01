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
    Numeros.prototype.enviarMensaje = function () {
    };
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
    Global.enviarInfo = function (pedido) {
        pedido.enviarMensaje();
    };
    Global.mostrar = function (dato) {
        console.log("Nombre del cliente ".concat(dato.nombre, " edad: ").concat(dato.edad));
    };
    return Global;
}());
var numeros = new Numeros();
var pedido = {
    enviarMensaje: function () {
        console.log("este es un mensaje");
    }
};
var cliente = {
    nombre: "Paula Andrea",
    edad: 20
};
Global.enviarInfo(pedido);
numeros.elementos = [1, 2, 3];
Global.paraCada(numeros);
Global.mostrar(cliente);
