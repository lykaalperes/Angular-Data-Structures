import { Component } from '@angular/core';

interface CarModel {
  model: string;
  quantity: number;  // Added quantity field
}

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css'],
})
export class CarModelListComponent {
  carModels: CarModel[] = [
    { model: 'Tesla Model S', quantity: 5 },
    { model: 'Ford Mustang', quantity: 3 },
    { model: 'Chevrolet Camaro', quantity: 7 },
  ];

  newCarModel: CarModel = { model: '', quantity: 0 };

  addCarModel() {
    if (this.newCarModel.model && this.newCarModel.quantity > 0) {
      this.carModels.push({ ...this.newCarModel });
      this.newCarModel = { model: '', quantity: 0 }; // Reset the form
    }
  }

  removeCarModel(model: string) {
    this.carModels = this.carModels.filter(carModel => carModel.model !== model);
  }

  sellCar(model: string) {
    const car = this.carModels.find(carModel => carModel.model === model);
    if (car && car.quantity > 0) {
      car.quantity--;  // Decrease the quantity when sold
    }
  }
}
