import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/libro.model';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'kc-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {

  libro: Book;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private catalog: CatalogoService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.libro = this.catalog.getBook(id);
    } else {
      this.libro = {id: 0, title: '', autor: '', description: ''};
    }
  }

}
