import { Component, OnInit } from '@angular/core';
import { ProductsListService } from './products-list.service';
import { Product } from '../../../core/models/product';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading = false;

  constructor(private productsListService: ProductsListService) {}

  ngOnInit(): void {
    this.products$ = this.productsListService.observeProducts();
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading = true;
    this.productsListService
      .fetchProducts()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  handleSearch(event): void {
    this.productsListService.search(event.target.value);
  }
}
