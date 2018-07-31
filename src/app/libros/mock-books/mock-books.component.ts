import { Component, OnInit } from '@angular/core';
import { MbooksService } from '../../services/mbooks.service';

@Component({
  selector: 'kc-mock-books',
  templateUrl: './mock-books.component.html',
  styleUrls: ['./mock-books.component.css']
})
export class MockBooksComponent implements OnInit {

  clave: string;
  libros: Array<string>;

  constructor(public mockbook: MbooksService) { }

  ngOnInit() {
    this.clave = '';
    this.libros = [];
  }

  btnBuscar() {
    this.libros = this.mockbook.getLibros(this.clave);
  }

  btnBuscarRx() {
    this.mockbook.getLibros$(this.clave)
      .subscribe(
        (response: any) => { this.libros = response; }
      );
  }
}
