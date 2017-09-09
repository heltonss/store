import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsComponent } from './../../catalogue/products/products.component';
import { CatalogueComponent } from './../../catalogue/catalogue.component';
import { MainComponent } from './../main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateComponent } from './navigate.component';

describe('NavigateComponent', () => {
  let component: NavigateComponent;
  let fixture: ComponentFixture<NavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [NavigateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
