import { ProductsComponent } from './../catalogue/products/products.component';
import { CatalogueModule } from './../catalogue/catalogue.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SharedModule } from './../shared/shared.module';
import { CatalogueComponent } from './../catalogue/catalogue.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CatalogueModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigateComponent,
  ]
})
export class MainModule { }
