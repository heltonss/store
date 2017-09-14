import { Component, OnInit } from '@angular/core';

import { Product } from './../shared/product';
import { DataService } from './../shared/data.service';
import { ShoppingCartService } from './../shared/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private product: Product;
  private objectKeys = Object.keys
  private qtdProductsCart: number = 0;

  constructor(private dataService: DataService, private shoppingCartServive: ShoppingCartService) { }

  ngOnInit() {
    this.product = this.dataService.product;
  }

  addProductShoppingCart(product: Product): void {
    this.qtdProductsCart++
    delete product['_id'];
    this.shoppingCartServive.saveProductShoppingCart(product)
      .then(() => console.log('was save with success'))
      .catch(err => console.log('erro to the save'));
  }

  getQtdProductsShoppingCart(): void{
    this.shoppingCartServive.getShoppingCart().subscribe(res => this.qtdProductsCart = res.length);
  }
}
