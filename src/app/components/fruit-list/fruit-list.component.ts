import { Component } from '@angular/core';

interface Fruit {
  id: number;
  name: string;
}

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent {
  fruits: Fruit[] = [
  ];

  newFruit: Fruit = { id: 0, name: '' };

  addFruit() {
    if (this.newFruit.name) {
      this.newFruit.id = this.fruits.length + 1; // Simple ID generation
      this.fruits.push({ ...this.newFruit });
      this.newFruit = { id: 0, name: '' }; // Reset the form
    }
  }

  removeFruit(id: number) {
    this.fruits = this.fruits.filter(fruit => fruit.id !== id);
  }
}
