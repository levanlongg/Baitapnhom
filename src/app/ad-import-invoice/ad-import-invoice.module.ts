import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdImportInvoiceComponent } from './ad-import-invoice.component'
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AdImportInvoiceComponent,
  }, 
];

@NgModule({
  declarations: [AdImportInvoiceComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdImportInvoiceModule { }
