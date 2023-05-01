interface ILIbro {
    id: number;
    titulo: string;
    autor: string;
    coAutor?: string;
    prestamo?: (id: number) => void;
}
const libro: ILIbro = {
    id: 12,
    autor: "Juan Gomez",
    titulo: "El libro de los pensamientos",
    prestamo: (id: number) => {
        console.log("Libro Prestado");
    }
}
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
function obtenerLibro(): ILIbro {
    return {
        id: 34, titulo: "Que buena es la vida",
        autor: "marina Gomez"
    }
}
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