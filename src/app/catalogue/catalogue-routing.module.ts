import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueComponent } from "./catalogue.component";
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'catalogue/:id',
    component: CatalogueComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
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
export class CatalogueRoutingModule { }
