import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-control-tareas',
  templateUrl: './control-tareas.component.html',
  styleUrls: ['./control-tareas.component.css']
})
export class ControlTareasComponent implements OnInit {
  aTareas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea(tarea) {
    this.aTareas.push(tarea);
  }

  deleteTarea(tareaIndex) {
    this.aTareas.splice(tareaIndex, 1);
  }
}
