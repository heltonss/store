import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigateComponent
  ]
})
export class MainModule { }
