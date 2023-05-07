//Definiendo nuestro primer type    
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
/**Types con atributos de solo lectura */
type Vehiculo = {
    readonly marca: string,
    color: string;
}
let miVehiculo: Vehiculo = {
    marca: "Fiat",
    color: "Rojo",
};
miVehiculo.color = "verde";
//miVehiculo.marca = "Mazda"
//no permite modificarla porque es de solo lectura

/**Uniones en type */
type OtroVehiculo = {
    marca: string;
    tipo: "Familiar" | "Deportivo";
    precio: number
}
let vehiculoFamiliar: OtroVehiculo = {
    marca: "Ford",
    tipo: "Deportivo",
    precio: 100000,
}
//Usando un enum en la declaración de un type
enum Profesion {
    Contador,
    Ingeniero,
    Medico
}
type Persona = {
    nombre: string,
    profesion: Profesion
}
let nuevaPersona: Persona = {
    nombre: "Fernando Giraldo",
    profesion: Profesion.Contador
}
/**Definir métodos en un type */
type figura = {
    alto: number;
    ancho: number;
    area(): number;
}

let cuadrado: figura = {
    alto: 6,
    ancho: 5,
    area() {
        return this.alto * this.ancho
    }
};
console.log("Area: " + cuadrado.area())
/**Otra forma para definir un método */
type Cambio = {
    tarifa: number;
    cantidad: number;
    calcula: () => number;
}
let miCambio: Cambio = {
    tarifa: 1500,
    cantidad: 100,
    calcula: () => {
        return miCambio.tarifa * miCambio.cantidad;
    }
}
console.log(miCambio.calcula())

/**Extensión de tipos */
type Automovil = {
    color: string;
}
type Deportivo = Automovil & {
    modelo: number;
}

let miDeportivo: Deportivo = {
    color: "Rojo",
    modelo: 1980
}