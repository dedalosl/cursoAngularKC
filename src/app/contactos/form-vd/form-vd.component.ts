import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto.model';
import { GRUPOS, SECTORES, AFICIONES } from '../../models/maestro.datos';
import { Sector } from '../../models/sector.model';
import { Grupo } from '../../models/grupo.model';
import { Aficion } from '../../models/aficion.model';


@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {

  contacto: Contacto;
  grupos: Array<Grupo>;
  sectores: Array<Sector>;
  aficiones: Array<Aficion>;
  constructor() { }

  ngOnInit() {
    this.contacto = new Contacto();
    this.grupos = GRUPOS;
    this.sectores = SECTORES;
    this.aficiones = AFICIONES;
  }

  changeAficiones(ev) {
    if (ev.target.checked) {
      this.contacto.aficiones.push(ev.target.id);
    } else {
      this.contacto.aficiones.splice(
        this.contacto.aficiones.indexOf(ev.target.id), 1
      );
    }
  }

  enviar() {
    console.log('Datos enviados');
  }
}

