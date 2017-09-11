import { Component, OnInit } from '@angular/core';

import { Product } from './../shared/product';
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private product: Product;
  private objectKeys = Object.keys
  private qtdProductsCart: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.product = this.dataService.product;
  }

  addProducts(){
    this.qtdProductsCart++
  }


}
