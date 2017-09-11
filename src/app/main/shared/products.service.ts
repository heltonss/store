import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductsService {
  private url: string = 'http://localhost:3000/api/products';

  constructor(private http: Http) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url)
      .map(this.handleData)
      .catch(this.handleError);
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
