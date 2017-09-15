import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../shared/shopping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public productsShoppingCart: Object[];
  private timerSubscription: any;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.getProductsShoppingCart();
  }

  getProductsShoppingCart(): void {
    this.shoppingCartService.getShoppingCart().subscribe(res => this.productsShoppingCart = res)
  }

  removeProduct(id: string){
    this.shoppingCartService.deleteShoppingCart(id);
    this.removeProductView()
  }

  removeProductView() {
    this.timerSubscription = Observable.timer(500).first().subscribe(() => this.getProductsShoppingCart())
  }
}
