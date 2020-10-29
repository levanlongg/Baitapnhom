import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCategoryComponent } from './ad-category.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdCategoryComponent,
  }, 
];

@NgModule({
  declarations: [AdCategoryComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdCategoryModule { }
