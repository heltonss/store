import { Input, Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  @Input() countProduct: number;
  private qtdShoppingCart;
  public productsShoppingCart: Product[]
  public totalProducts: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.getProductShoppingCart();
  }
  
  ngOnChanges() {
    this.getProductShoppingCart();
  }
  
  // updateCountCart(value: number) {
  //   this.qtdShoppingCart = value;
  // }
  
  getProductShoppingCart(): void {
    this.shoppingCartService.getShoppingCart().subscribe( (res) => {
    }) 
  }

}
