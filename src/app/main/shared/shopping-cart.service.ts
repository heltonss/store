import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoppingCartService {
  private hostname: string = location.hostname
  private urlendpoint: string = 'https://storebspapi.herokuapp.com/api/shoppingcart'
  
  constructor(private http: Http) { }

  getShoppingCart(): Observable<any> {
    return this.http.get(this.urlendpoint)
      .map(this.handleData)
      .catch(this.handleError);
  }

  deleteShoppingCart(id: string): Promise<any> {
    return this.http.delete(`${this.urlendpoint}/${id}`)
    .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }

  saveProductShoppingCart(product): Promise<any> {
    return this.http.post(this.urlendpoint, product)
    .toPromise()
    .then(this.handleData)
    .catch(this.handleError);

  }

  private handleData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError(error) {
    const errorMsg = `${error.status, error.statusText}`;
    return error;
  }

}
