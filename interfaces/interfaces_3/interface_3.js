var libro = {
    id: 12,
    autor: "Juan Gomez",
    titulo: "El libro de los pensamientos",
    prestamo: function (id) {
        console.log("Libro Prestado");
    }
};
var libros = [
    { id: 1, titulo: "Un nuevo Mundo", autor: "Pedro Martinez" },
    { id: 2, titulo: "Mi familia", autor: "Anónimo" },
    {
        id: 3, titulo: "El nuevo planeta", autor: "Maria Angelica",
        prestamo: function (id) {
            console.log("libro Disponible");
        }
    }
];
function obtenerLibro() {
    return {
        id: 34, titulo: "Que buena es la vidda",
        autor: "marina Gomez"
    };
}
function CrearLibro(libro) {
    return libro;
}
var nuevoLibro = {
    id: 123,
    titulo: "El amor por la vida",
    autor: "Desconocido",
    prestamo: function (id) {
        console.log("Libro disponible con el id: "
            + id);
    }
};
CrearLibro(nuevoLibro);
console.log(libros[1].autor);
var miLibro = obtenerLibro();
console.log(miLibro.titulo);
