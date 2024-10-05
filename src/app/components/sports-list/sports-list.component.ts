import { Component } from '@angular/core';

interface Sport {
  name: string;
  count: number; // New field to track how many users play the sport
}

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css'],
})
export class SportsListComponent {
  sports: Sport[] = [
    { name: 'Soccer', count: 0 },
    { name: 'Basketball', count: 0 },
    { name: 'Tennis', count: 0 },
  ];

  newSport: Sport = { name: '', count: 0 };

  // Add a user for the selected sport
  addPlayer(sport: Sport) {
    sport.count++;
  }

  // Add a new sport to the list
  addSport() {
    if (this.newSport.name) {
      this.sports.push({ ...this.newSport });
      this.newSport = { name: '', count: 0 }; // Reset form
    }
  }

  // Calculate the percentage of players for each sport
  getTotalPlayers() {
    return this.sports.reduce((total, sport) => total + sport.count, 0);
  }

  getPercentage(sport: Sport) {
    const totalPlayers = this.getTotalPlayers();
    return totalPlayers > 0 ? ((sport.count / totalPlayers) * 100).toFixed(2) : '0.00';
  }
}
