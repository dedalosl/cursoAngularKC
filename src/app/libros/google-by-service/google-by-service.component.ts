import { Component, OnInit } from '@angular/core';
import { GbooksService } from '../../services/gbooks.service';

@Component({
  selector: 'kc-google-by-service',
  templateUrl: './google-by-service.component.html',
  styleUrls: ['./google-by-service.component.css']
})
export class GoogleByServiceComponent implements OnInit {

  clave: string;
  libros: Array<string>;
  urlBase: string;

  constructor(public gbooks: GbooksService) { }

  ngOnInit() {
    this.libros = [];
  }

  btnBuscar(clave: string) {
    this.libros = [];
    this.gbooks.getLibros$(clave).subscribe(
      response => { this.libros = response; }
    );
    this.clave = '';
  }
}
