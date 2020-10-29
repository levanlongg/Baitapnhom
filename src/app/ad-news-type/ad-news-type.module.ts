import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdNewsTypeComponent } from './ad-news-type.component';
import { RouterModule, Routes } from '@angular/router';



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
    RouterModule.forChild(routes),
    
  ]
})
export class AdNewsTypeModule { }
