import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MainComponent } from './main.component';
import { NavigateComponent } from './navigate/navigate.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigateComponent
  ]
})
export class MainModule { }
