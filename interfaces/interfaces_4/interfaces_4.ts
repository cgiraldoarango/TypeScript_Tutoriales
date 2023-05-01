interface ISaluda {
    (name: string): string
}
let hola: ISaluda = (name: string): string => {
    return `Hola ${name} como estás`
}
interface ICurso {
    titulo: string;
    url: string;
    capitulos: number
}
const curso: ICurso = {
    titulo: "TypeScript",
    url: "https://cursos.libros/curso1",
    capitulos: 15
}
//Como extender las interfaces
interface ILibrosUno {
    title: string;
    autor: string;
    pages: Number
}
interface ILibrosDos extends ILibrosUno {
    ventas: number
}

//combinar dos interfaces
interface IProfesor {
    nombre: string
}
interface IProfesor {
    edad: number
}
let profesorMatematicas: IProfesor = {
    nombre: "Juan Jose",
    edad: 36
}