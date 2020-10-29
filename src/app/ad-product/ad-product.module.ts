import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProductComponent } from './ad-product.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdProductComponent,
  }, 
];

@NgModule({
  declarations: [AdProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdProductModule { }
