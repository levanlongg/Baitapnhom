import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdNewsTypeComponent } from './ad-news-type.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdNewsTypeComponent,
  }, 
];

@NgModule({
  declarations: [AdNewsTypeComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    
  ]
})
export class AdNewsTypeModule { }
