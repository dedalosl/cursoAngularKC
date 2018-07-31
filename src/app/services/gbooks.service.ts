import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GbooksService {

  urlBase: string;
  libros: Array<string>;


  constructor(public http: HttpClient) {
    this.libros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros$(clave: string) {
    const url = this.urlBase + clave;
    return this.http.get(url).
      pipe(
        map(response => this.extractTitles(response))
      );
  }

  private extractTitles(response: any) {
    return response.items.map(book => book.volumeInfo.title);
  }
}
