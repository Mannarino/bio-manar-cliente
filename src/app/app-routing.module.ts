import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { accessAdminGuard } from './core/access-admin.guard';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
]},
 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
   canActivate: [accessAdminGuard] },
 { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
