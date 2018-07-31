import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http/';

@Component({
  selector: 'kc-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {

  clave: string;
  libros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.libros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar(clave: string) {
    const url = this.urlBase + this.clave;
    this.clave = '';
    this.libros = [];
    this.http.get(url).subscribe(
      (response: any) => {
        response.items.forEach(item => {
          this.libros.push(item.volumeInfo.title);
        });
      }
    );
  }
}
