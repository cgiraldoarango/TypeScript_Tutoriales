//Declaración de interfaces
interface ILIbro {
    id: number;
    titulo: string;
    autor: string;
    coAutor?: string;
    prestamo?: (id: number) => void;
}
//Uso de una interface como tipo 
const libro: ILIbro = {
    id: 12,
    autor: "Juan Gomez",
    titulo: "El libro de los pensamientos",
    prestamo: (id: number) => {
        console.log("Libro Prestado");
    }
}
//Uso de una interface como tipo para crear un array
const libros: ILIbro[] = [
    { id: 1, titulo: "Un nuevo Mundo", autor: "Pedro Martinez" },
    { id: 2, titulo: "Mi familia", autor: "Anónimo" },
    {
        id: 3, titulo: "El nuevo planeta", autor: "Maria Angelica",
        prestamo: (id: number) => {
            console.log("libro Disponible")
        }
    }
]
//Una función retorna un tipo de Interface
function obtenerLibro(): ILIbro {
    return {
        id: 34, titulo: "Que buena es la vida",
        autor: "marina Gomez"
    }
}
//Una función recibe parámetro y retorna
//un mismo tipo de interface
function CrearLibro(libro: ILIbro): ILIbro {
    return libro
}
let nuevoLibro: ILIbro = {
    id: 123,
    titulo: "El amor por la vida",
    autor: "Desconocido",
    prestamo: (id: number) => {
        console.log("Libro disponible con el id: "
            + id)
    }
}
CrearLibro(nuevoLibro);
console.log(libros[1].autor);
let miLibro = obtenerLibro();
console.log(miLibro.titulo)