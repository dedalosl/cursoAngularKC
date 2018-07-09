import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
=======
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeadComponent,
    FooterComponent,
    MenuComponent,
    MainComponent],
  exports: [
    HeadComponent,
    FooterComponent,
    MenuComponent,
    MainComponent
  ]
>>>>>>> 47e775fc9e4795e0ec3e03493061699c1ea42c8c
})
export class CoreModule { }
