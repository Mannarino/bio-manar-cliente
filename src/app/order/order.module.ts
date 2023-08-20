import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './container/order/order.component';
import { UiOrderComponent } from './components/ui-order/ui-order.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    OrderComponent,
    UiOrderComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
