import { Component } from '@angular/core';

interface Vegetable {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css'],
})
export class VegetableListComponent {
  vegetables: Vegetable[] = [
    { name: 'Carrot', quantity: 10, price: 50 },
    { name: 'Broccoli', quantity: 5, price: 70 },
    { name: 'Spinach', quantity: 8, price: 40 },
  ];

  newVegetable: Vegetable = { name: '', quantity: 0, price: 0 };

  // Function to add a new vegetable
  addVegetable() {
    if (this.newVegetable.name && this.newVegetable.quantity > 0 && this.newVegetable.price > 0) {
      this.vegetables.push({ ...this.newVegetable });
      this.newVegetable = { name: '', quantity: 0, price: 0 }; // Reset form
    }
  }

  // Function to remove a vegetable
  removeVegetable(name: string) {
    this.vegetables = this.vegetables.filter(vegetable => vegetable.name !== name);
  }

  // Function to mark a vegetable as sold and reduce quantity by 1
  sellVegetable(name: string) {
    const vegetable = this.vegetables.find(v => v.name === name);
    if (vegetable && vegetable.quantity > 0) {
      vegetable.quantity--; // Reduce quantity
    }
  }
}
