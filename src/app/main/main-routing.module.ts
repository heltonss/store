import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainComponent } from './main.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
       component: ProductsComponent
      },
      {
        path: 'shopping-cart',
       component: ShoppingCartComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MainRoutingModule { }
