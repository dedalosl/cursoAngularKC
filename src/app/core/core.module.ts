import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
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
})
export class CoreModule { }
