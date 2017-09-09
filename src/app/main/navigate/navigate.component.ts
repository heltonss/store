import { MaterializeAction } from 'angular2-materialize';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {
  private sideNavActions = new EventEmitter<any | MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

}
