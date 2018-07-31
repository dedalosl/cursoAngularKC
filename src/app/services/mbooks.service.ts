import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbooksService {

  libros: Array<string>;
  constructor() {
    this.libros = [
      'Introducción a Angular',
      'Angular a fondo',
      'Angular avanzado'
    ];
  }

  getLibros(clave: string) {
    return this.libros;
  }

  getLibros$(clave: string) {
    return new Observable(
      (observer) => {
        setTimeout( () => {
          observer.next(this.libros);
        }, 1000);
      }
    );
  }
}
