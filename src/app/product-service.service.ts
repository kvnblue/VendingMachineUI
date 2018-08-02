import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { }
  getProductCategories() {
   // return this.http.get('http://localhost:5100/vm/api/productcategories');
   return this.http.get('https://vending-machine-api.herokuapp.com/vm/api/productcategories');
  }

  submitItemSelection (id,amount): Observable<any> {
    let customHeader = new Headers();
    customHeader.append('Content-Type', 'application/json');
    
    let bodyObj = {
      pid: id,
      amountPaid: amount,
    };
    
    return this.http
      .post('https://vending-machine-api.herokuapp.com/vm/api/productcategories/product/purchase',JSON.stringify(bodyObj),httpOptions);
      //.post('http://localhost:5100/vm/api/productcategories/product/purchase',JSON.stringify(bodyObj),httpOptions);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
