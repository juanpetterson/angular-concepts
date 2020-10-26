import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreService {
  private subject = new ReplaySubject<Product[]>(1);

  save(products: Product[]) {
    this.subject.next(products);
  }

  stream$() {
    return this.subject.asObservable();
  }
}
