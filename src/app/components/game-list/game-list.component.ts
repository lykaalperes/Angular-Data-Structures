import { Component } from '@angular/core';

// Define an interface for the Game
interface Game {
  name: string;
  year: number;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent {
  // Initialize the games array with name and year
  games: Game[] = [
    { name: 'The Legend of Zelda', year: 1986 },
    { name: 'Super Mario Bros', year: 1985 },
    { name: 'Minecraft', year: 2011 },
    { name: 'Fortnite', year: 2017 },
    { name: 'Call of Duty', year: 2003 },
    { name: 'Among Us', year: 2018 },
    { name: 'Animal Crossing', year: 2001 },
    { name: 'Overwatch', year: 2016 },
    { name: 'Final Fantasy', year: 1987 },
    { name: 'The Witcher 3', year: 2015 },
  ];

  newGame: string = '';
  newGameYear: number | null = null; // For input of the new game year

  // Function to add a new game
  addGame() {
    if (this.newGame && this.newGameYear) {
      this.games.push({ name: this.newGame, year: this.newGameYear });
      this.newGame = ''; // Clear the input field
      this.newGameYear = null; // Clear the year input
    }
  }

  // Function to remove a game by index
  removeGame(index: number) {
    this.games.splice(index, 1);
  }
}
