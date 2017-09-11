import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { ProductsService } from './../shared/products.service';
import { DataService } from './../shared/data.service';
import { Product } from "../shared/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private product: Product;
  private products: Product[];
  @Output() qtdProductsCart = 0;

  constructor(private router: Router, private productsService: ProductsService, private dataService: DataService) { }


  ngOnInit() {
    this.getProducts();
    // this.qtdProductsCart.emit(this.countProduct)
  }

  viewProduct(product: Product): void {
    this.router.navigateByUrl('/product');
    this.dataService.product = product;
  }

  getProducts():void  {
    this.productsService.getProducts().subscribe((res) => this.products = res)
  }

  addProduct(): void {
    this.qtdProductsCart++
  }

  ngOnDestroy() {
    this.dataService.product;
  }

}
