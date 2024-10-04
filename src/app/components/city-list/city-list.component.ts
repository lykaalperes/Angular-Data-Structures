import { Component } from '@angular/core';

interface City {
  name: string;
}

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  cities: City[] = [
    { name: 'New York' },
    { name: 'Los Angeles' },
    { name: 'Chicago' },
  ];

  newCity: City = { name: '' };

  addCity() {
    if (this.newCity.name) {
      this.cities.push({ ...this.newCity });
      this.newCity = { name: '' }; // Reset the form
    }
  }

  removeCity(name: string) {
    this.cities = this.cities.filter(city => city.name !== name);
  }
}
