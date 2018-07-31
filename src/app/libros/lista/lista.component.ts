import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Book } from '../../models/libro.model';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  libros: Array<Book>;
  constructor(private catalogo: CatalogoService) { }

  ngOnInit() {
    this.libros = this.catalogo.getBooks();
  }

}
