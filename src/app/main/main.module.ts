import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainComponent } from './main.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SharedModule } from './../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigateComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductComponent
  ]
})
export class MainModule { }
