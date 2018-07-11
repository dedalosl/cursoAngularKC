import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: string;
  @Output() eventAdd: EventEmitter<string>;
  constructor() {
    this.eventAdd = new EventEmitter();
  }

  ngOnInit() {
  }

  btnAdd() {
    this.eventAdd.emit(this.item);
    this.item = '';
  }
}
