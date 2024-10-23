import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    PagesComponent,
    ListComponent,
    FormComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
