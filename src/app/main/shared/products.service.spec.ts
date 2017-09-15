import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  
  let productsService: ProductsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProductsService]
    });
  });

  it('should ...', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));

 
});
