import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCaculativePointsComponent } from './ad-caculative-points.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdCaculativePointsComponent,
  }, 
];

@NgModule({
  declarations: [AdCaculativePointsComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdCaculativePointsModule { }
