class Libro {

    autor: string;
    titulo: string;

    constructor(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
    }
}

class LibroTecnico extends Libro {
    categoria: string;

    constructor(autor, titulo, categoria = 'Informatica') {
        super(autor, titulo);
        this.categoria = categoria;
    }

    mostrar() {
        super.mostrar();
        console.log('Libro tecnico');
    }
}

let libro = new LibroTecnico('J.Perez', 'Angular');
libro.mostrar();
