class Libro {
    constructor(autor, titulo) {
        this.autor = autor
        this.titulo = titulo
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