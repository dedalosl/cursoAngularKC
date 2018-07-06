class Libro {
    constructor(autor, libro) {
        this.autor = autor
        this.libro = libro
    }

    mostrar(){
        console.log(this)
    }
}

class LibroTecnico extends Libro{
    constructor(autor, titulo, categoria='Informatica'){
        super(autor, titulo)
        this.categoria = categoria
    }
}

let libro1 = new LibroTecnico("J.Perez", "Aprende Angular")
libro1.mostrar()