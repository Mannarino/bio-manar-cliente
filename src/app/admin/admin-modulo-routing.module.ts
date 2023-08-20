import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const adminRoutes: Routes = [
  { path: '', component: DashboardComponent , children: [
    { path: 'products', component: ListProductComponent},
    { path: 'create-product', component: CreateProductComponent },
    { path: 'edit-product/:id', component: EditProductComponent }] }
];  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AdminModuloRoutingModule { }
