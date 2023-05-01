interface ISerie{
    elementos:number[];
    contar():number;
}
interface IDatos{
    nombre:string;
    edad?:number;
}
interface IPedido{
    enviarMensaje():void;
}
interface IPersona{
    nombre:string;
    apellido:string;
    edad?:Number
}
//uso en el parámetro de una función
function saludar(cliente:IPersona):string{
    return `Hola ${cliente.nombre}`
}
let empleado:IPersona={
    nombre:"CARLOS",
    apellido:"GIRALDO",
}

console.log(saludar(empleado))

class Numeros implements ISerie, IPedido{
    enviarMensaje(): void {
        
    }
    elementos: number[];
    contar(): number {
        return this.elementos[0];
    }   
}

class Global{
    static paraCada(coleccion:ISerie){
        for(let x=0;x<coleccion.elementos.length;x++){
            console.log(coleccion.elementos[x])
        }
    }
    static enviarInfo(pedido:IPedido){
        pedido.enviarMensaje()
    }
    static mostrar(dato:IDatos){
        console.log(`Nombre del cliente ${dato.nombre} edad: ${dato.edad}`)
    }
}
let numeros = new Numeros();
let pedido:IPedido={
    enviarMensaje() {
        console.log("este es un mensaje")
    },
}
let cliente:IDatos={
    nombre:"Paula Andrea",
    edad:20
}
Global.enviarInfo(pedido);
numeros.elementos=[1,2,3]
Global.paraCada(numeros)
Global.mostrar(cliente);