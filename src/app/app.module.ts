import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdProductModule } from './ad-product/ad-product.module';
import { Er404Component } from './er404/er404.component';
import { AdProductTypeModule } from './ad-product-type/ad-product-type.module';
import { SharedModule } from './shared/shared.module';
import { AdHomeComponent } from './ad-home/ad-home.component';
import { AdImportInvoiceModule } from './ad-import-invoice/ad-import-invoice.module';
import { AdProducerModule } from './ad-producer/ad-producer.module';
import { AdUserModule } from './ad-user/ad-user.module';
import { AdPhotoModule } from './ad-photo/ad-photo.module';
import { AdNewsModule } from './ad-news/ad-news.module';
import { AdNewsTypeModule } from './ad-news-type/ad-news-type.module';
import { AdCategoryModule } from './ad-category/ad-category.module';
import { AdBillSaleModule } from './ad-bill-sale/ad-bill-sale.module';
import { AdCaculativePointsModule } from './ad-caculative-points/ad-caculative-points.module';
import { AdRevenueStatisticsModule } from './ad-revenue-statistics/ad-revenue-statistics.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  {
    path: 'ad-product',
    loadChildren: () => import('./ad-product/ad-product.module').then(m => m.AdProductModule)  
  },
  {
    path: 'ad-product-type',
    loadChildren: () => import('./ad-product-type/ad-product-type.module').then(m => m.AdProductTypeModule)  
  },
  {
    path: 'ad-producer',
    loadChildren: () => import('./ad-producer/ad-producer.module').then(m => m.AdProducerModule)  
  },
  {
    path: 'ad-import-invoice',
    loadChildren: () => import('./ad-import-invoice/ad-import-invoice.module').then(m => m.AdImportInvoiceModule)  
  },
  {
    path: 'ad-user',
    loadChildren: () => import('./ad-user/ad-user.module').then(m => m.AdUserModule)  
  },
  {
    path: 'ad-photo',
    loadChildren: () => import('./ad-photo/ad-photo.module').then(m => m.AdPhotoModule)  
  },
  {
    path: 'ad-news',
    loadChildren: () => import('./ad-news/ad-news.module').then(m => m.AdNewsModule)  
  },
  {
    path: 'ad-news-type',
    loadChildren: () => import('./ad-news-type/ad-news-type.module').then(m => m.AdNewsTypeModule)  
  },
  {
    path: 'ad-category',
    loadChildren: () => import('./ad-category/ad-category.module').then(m => m.AdCategoryModule)  
  },
  {
    path: 'ad-bill-sale',
    loadChildren: () => import('./ad-bill-sale/ad-bill-sale.module').then(m => m.AdBillSaleModule)  
  },
  {
    path: 'ad-acculative-points',
    loadChildren: () => import('./ad-caculative-points/ad-caculative-points.module').then(m => m.AdCaculativePointsModule)  
  },
  {
    path: 'ad-revenue-statistics',
    loadChildren: () => import('./ad-revenue-statistics/ad-revenue-statistics.module').then(m => m.AdRevenueStatisticsModule)  
  },
  {
    path: 'ad-login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  
  },
  {
    path: '',
    redirectTo: '/ad-product',
    pathMatch: 'full',
  },
  { path: '**', component:Er404Component}
];
@NgModule({
  declarations: [
    AppComponent,
    Er404Component,
    AdHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AdUserModule,
    AdPhotoModule,
    AdProductModule,
    AdProducerModule,
    AdNewsModule,
    AdCaculativePointsModule,
    AdRevenueStatisticsModule,
    AdCategoryModule,
    LoginModule,
    AdBillSaleModule,
    AdNewsTypeModule,
    AdProductTypeModule,
    AdImportInvoiceModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
