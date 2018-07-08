import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosModule } from './contactos.module';
import { ContactosComponent } from './contactos.component';

const routes: Routes = [
  { path: '', component: ContactosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosRoutingModule { }
