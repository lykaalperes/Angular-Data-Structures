import { Component } from '@angular/core';

interface Product {
  name: string;
  quantity: number;
  sold: number;
  remaining: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Laptop', quantity: 10, sold: 0, remaining: 10 },
    { name: 'Smartphone', quantity: 15, sold: 0, remaining: 15 },
    { name: 'Tablet', quantity: 8, sold: 0, remaining: 8 },
  ];

  newProduct: Product = { name: '', quantity: 0, sold: 0, remaining: 0 };

  addProduct() {
    if (this.newProduct.name && this.newProduct.quantity > 0) {
      this.newProduct.remaining = this.newProduct.quantity;  // Set initial remaining to be equal to quantity
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', quantity: 0, sold: 0, remaining: 0 }; // Reset the form
    }
  }

  removeProduct(name: string) {
    this.products = this.products.filter(product => product.name !== name);
  }

  sellProduct(name: string) {
    const product = this.products.find(product => product.name === name);
    if (product && product.remaining > 0) {
      product.sold++;           // Increase sold count
      product.remaining--;       // Decrease remaining count
    }
  }
}
