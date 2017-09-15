import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public product: Product;
  constructor() { }
}
