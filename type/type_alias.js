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
function datosEmpleado(empleado) {
    console.log("El empleado se llama ".concat(empleado.nombre, " \n    y tiene ").concat(empleado.edad));
}
//llamando a la función datosEmpleado
datosEmpleado({ nombre: "Carmenza Gómez", edad: 55, ciudad: "Bogotá" });
var nuevoEmpleado = {
    nombre: "Gonzalo",
    ciudad: "Cali"
};
datosEmpleado(nuevoEmpleado);
var miVehiculo = {
    marca: "Fiat",
    color: "Rojo"
};
miVehiculo.color = "verde";
var vehiculoFamiliar = {
    marca: "Ford",
    tipo: "Deportivo",
    precio: 100000
};
