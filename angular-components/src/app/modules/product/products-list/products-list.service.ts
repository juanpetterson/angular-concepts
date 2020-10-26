import { Injectable } from '@angular/core';
import { Product } from '../../../core/models/product';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { ProductsApiService } from '../../../core/api/ProductsApi.service';
import { ProductsStoreService } from '../../../core/store/ProductsStore.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  private querySubject = new BehaviorSubject('');

  constructor(
    private productsApi: ProductsApiService,
    private productsStore: ProductsStoreService
  ) {}

  observeProducts(): Observable<Product[]> {
    return combineLatest(
      this.querySubject.asObservable(),
      this.productsStore.stream$(),
      (query: string, products: Product[]) => {
        return products.filter((product) =>
          product.name.toLowerCase().includes(query.toLocaleLowerCase())
        );
      }
    );
  }

  fetchProducts(): Observable<boolean> {
    return this.productsApi.fetchProducts().pipe(
      tap((products) => {
        this.productsStore.save(products);
      }),
      map(() => true)
    );
  }

  search(query: string) {
    this.querySubject.next(query);
  }
}
