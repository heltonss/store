import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Injectable()
export class ShoppingCartService {

  constructor(private http: Http) { }
  private urlendpoint: string ='http://localhost:3000/api/shopping-carts'

  getShoppingCart(): void{
    this.http.get(this.urlendpoint)
    .map(this.handleData)
    .catch(this.handleError);
  }

  deleteShoppingCart(id: string): void{
    this.http.delete(`${this.urlendpoint}/${id}`)
  }

  private handleData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError(error) {
    const errorMsg = `${error.status, error.statusText}`;
    return errorMsg;
  }

}
