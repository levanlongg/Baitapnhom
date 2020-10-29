import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdNewsComponent } from './ad-news.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdNewsComponent,
  }, 
];

@NgModule({
  declarations: [AdNewsComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdNewsModule { }
