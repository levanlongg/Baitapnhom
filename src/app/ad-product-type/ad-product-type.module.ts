import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProductTypeComponent } from './ad-product-type.component'
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdProductTypeComponent,
  }, 
];

@NgModule({
  declarations: [AdProductTypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdProductTypeModule { }
