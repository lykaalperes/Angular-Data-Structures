import { Component } from '@angular/core';

interface Country {
  name: string;
  continent: string;
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  countries: Country[] = [
    { name: 'United States', continent: 'North America' },
    { name: 'Brazil', continent: 'South America' },
    { name: 'Japan', continent: 'Asia' },
  ];

  newCountry: Country = { name: '', continent: '' };

  addCountry() {
    if (this.newCountry.name && this.newCountry.continent) {
      this.countries.push({ ...this.newCountry });
      this.newCountry = { name: '', continent: '' }; // Reset form
    }
  }

  removeCountry(name: string) {
    this.countries = this.countries.filter(country => country.name !== name);
  }
}
