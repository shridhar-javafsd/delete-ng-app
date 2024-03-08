import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = 'https://dummyapi.online/api/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    console.log('getAllProducts');
    return this.http.get<Product[]>(this.url);
  }
  
  getProductById(id: number): Observable<Product> {
    console.log(id);
    return this.http.get<Product>(`${this.url}products/${id}`);
  }

}
