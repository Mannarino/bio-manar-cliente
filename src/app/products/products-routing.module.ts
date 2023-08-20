import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, Router } from '@angular/router';
import { ProductDetailsComponent } from './pages/container-prudct-details/product-details/product-details.component';
import { ProductsComponent } from './container/products/products.component';



const productRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path:':id',component:ProductDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class ProductsRoutingModule { }
