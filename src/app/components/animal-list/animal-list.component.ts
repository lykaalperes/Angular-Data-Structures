import { Component } from '@angular/core';

interface Animal {
  name: string;
  remaining: number;
}

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent {
  // Initial animal list for Lyka's Zoo with remaining count
  animals: Animal[] = [
    { name: 'Lion', remaining: 3 },
    { name: 'Elephant', remaining: 2 },
    { name: 'Giraffe', remaining: 4 },
    { name: 'Zebra', remaining: 5 },
    { name: 'Panda', remaining: 1 },
    { name: 'Kangaroo', remaining: 6 },
    { name: 'Penguin', remaining: 10 }
  ];

  newAnimal: Animal = { name: '', remaining: 0 };

  // Function to add a new animal to the zoo
  addAnimal() {
    if (this.newAnimal.name && this.newAnimal.remaining > 0) {
      this.animals.push({ ...this.newAnimal });
      this.newAnimal = { name: '', remaining: 0 }; // Reset form
    }
  }

  // Function to remove an animal from the list
  removeAnimal(name: string) {
    this.animals = this.animals.filter(animal => animal.name !== name);
  }

  // Function to decrease the number of remaining animals when "died" or "transported"
  transportAnimal(name: string) {
    const animal = this.animals.find(a => a.name === name);
    if (animal && animal.remaining > 0) {
      animal.remaining--; // Decrease remaining count
    }
  }
}
