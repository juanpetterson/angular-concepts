import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private httpClient: HttpClient) {}

  fetchProducts() {
    return this.httpClient.get<Product[]>(
      'https://my-json-server.typicode.com/michalbujalski/products-api/products'
    );
  }
}
