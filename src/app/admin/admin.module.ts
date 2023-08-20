import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuloRoutingModule } from './admin-modulo-routing.module';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateProductComponent,
    EditProductComponent,
    ListProductComponent,
    HeaderComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    AdminModuloRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
