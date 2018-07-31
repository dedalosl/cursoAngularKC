import { Injectable } from '@angular/core';
import { Book } from '../models/libro.model';
import { BOOKS } from '../models/book.data';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private libros: Array<Book>;

  constructor() {
    this.libros = BOOKS;
  }

  getBooks() {
    return this.libros;
  }

  getBook(id: number | string) {
    return this.libros.find(book => book.id === +id);
  }
}
