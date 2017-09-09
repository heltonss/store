import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { CatalogueComponent } from './catalogue.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CatalogueComponent,
    ProductsComponent
  ]
})
export class CatalogueModule { }
