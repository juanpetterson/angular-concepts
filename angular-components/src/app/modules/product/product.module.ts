import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [CommonModule, ProductRoutingModule, ReactiveFormsModule],
  declarations: [ProductsListComponent],
})
export class ProductModule {}
