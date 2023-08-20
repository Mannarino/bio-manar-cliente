import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { MaterialModule } from '../material.module';
import { MicroComponent } from './pages/components-product-details/micro/micro.component';
import { NitroComponent } from './pages/components-product-details/nitro/nitro.component';
import { ProductDetailsComponent } from './pages/container-prudct-details/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './container/products/products.component';




@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    NitroComponent,
    MicroComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
