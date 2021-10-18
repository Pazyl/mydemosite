import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./component/main-page/main-page.component";
import {StorePageComponent} from "./component/store-page/store-page.component";
import {ProductPageComponent} from "./component/product-page/product-page.component";
import {CheckOrderComponent} from "./component/check-order/check-order.component";

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'store',
    component: StorePageComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: 'order',
    component: CheckOrderComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
