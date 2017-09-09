import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeDirective } from 'angular2-materialize';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaterializeDirective
  ],
  exports: [ MaterializeDirective ]
})
export class SharedModule { }
