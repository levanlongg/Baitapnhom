import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProducerComponent } from './ad-producer.component'
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AdProducerComponent,
  }, 
];

@NgModule({
  declarations: [AdProducerComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdProducerModule { }
