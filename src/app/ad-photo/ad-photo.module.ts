import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdPhotoComponent } from './ad-photo.component'
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdPhotoComponent,
  }, 
];

@NgModule({
  declarations: [AdPhotoComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdPhotoModule { }
