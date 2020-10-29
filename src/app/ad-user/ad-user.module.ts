import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdUserComponent } from './ad-user.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdUserComponent,
  }, 
];

@NgModule({
  declarations: [AdUserComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdUserModule { }
