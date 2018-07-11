import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() aItems: Array<string>;
  @Output() eventBorrar: EventEmitter<number>;
  constructor() {
    this.eventBorrar = new EventEmitter();
  }

  ngOnInit() {
  }

  btnBorrar(itemIndex: number) {
    this.eventBorrar.emit(itemIndex);
  }
}
