import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
