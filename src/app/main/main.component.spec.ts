import { ProductsComponent } from './../catalogue/products/products.component';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { CatalogueComponent } from './../catalogue/catalogue.component';
import { MainRoutingModule } from './main-routing.module';
import { CatalogueModule } from './../catalogue/catalogue.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        HeaderComponent,
        NavigateComponent
      ],
      imports: [
        CatalogueModule,
        MainRoutingModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: MainComponent,
            children: [
              {
                path: '',
                component: CatalogueComponent,
              },
              {
                path: 'products/:id',
                component: ProductsComponent
              }
            ]
          }
        ])
      ],
      providers: [RouterModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
