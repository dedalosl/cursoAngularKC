import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  usuario: string;
  idioma: string;

  constructor() { }

  ngOnInit() {
    this.usuario = 'paco';
    this.idioma = 'en';
  }

  btnBorrar(evento) {
    console.log(evento);
    this.usuario = '';
  }
}
