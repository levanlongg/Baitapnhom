import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBillSaleComponent } from './ad-bill-sale.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AdBillSaleComponent,
  }, 
];

@NgModule({
  declarations: [AdBillSaleComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdBillSaleModule { }
