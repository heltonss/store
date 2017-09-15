import { DataService } from './../shared/data.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { CartButtonComponent } from './../cart-button/cart-button.component';
import { By } from "@angular/platform-browser";
import { ProductsService } from './../shared/products.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        ProductsComponent,
        CartButtonComponent
      ],
      providers: [ProductsService, DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get a click', () => {
  //   let viewProduct = fixture.debugElement.query(By.css('.view-product'));
  //   viewProduct.triggerEventHandler('click', null);
  // });

  it('should get method wiewProduct defined', () => {
    expect(component.viewProduct).toBeDefined()
  });
});
