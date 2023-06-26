import { Component } from '@angular/core';
import { Product, ProductFactory } from "./product.factory";

@Component({
  selector: 'app-factory',
  template: `
    <button (click)="createProduct('laptop')">Create Laptop</button>
    <button (click)="createProduct('phone')">Create Phone</button>
    <div *ngIf="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.getInfo() }}</p>
    </div>
  `
})
export class FactoryComponent {
  product: Product | null = null;

  constructor(private productFactory: ProductFactory) {}

  createProduct(type: string): void {
    this.product = this.productFactory.createProduct(type);
  }
}
