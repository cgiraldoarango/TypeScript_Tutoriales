interface ISerie{
    elements:number[];
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
let persona1:IPersona={
    nombre:"CARLOS",
    apellido:"GIRALDO",
}
console.log(saludar(persona1))
