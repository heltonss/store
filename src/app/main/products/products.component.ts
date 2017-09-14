import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { ProductsService } from './../shared/products.service';
import { DataService } from './../shared/data.service';
import { Product } from "../shared/product";
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private product: Product;
  private products: Product[];
  @Output() qtdProductsCart = 0;

  constructor(private router: Router, private productsService: ProductsService, private dataService: DataService, private shoppingCartService: ShoppingCartService) { }


  ngOnInit() {
    this.getProducts();
    // this.qtdProductsCart.emit(this.countProduct)
  }

  viewProduct(product: Product): void {
    this.router.navigateByUrl('/product');
    this.dataService.product = product;
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((res) => this.products = res)
  }

  addProductShoppingCart(product: Product): void {
    this.qtdProductsCart++
    this.shoppingCartService.saveProductShoppingCart(product)
      .then(() => console.log('was save with success'))
      .catch(err => console.log('erro to the save'));
  }

  ngOnDestroy() {
    this.dataService.product;
  }

}
