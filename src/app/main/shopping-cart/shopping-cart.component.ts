import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../shared/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public productsShoppingCart: Object[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  getProductsShoppingCart(): void{
    this.shoppingCartService.getShoppingCart().subscribe(res => this.productsShoppingCart = res);
  }

}
