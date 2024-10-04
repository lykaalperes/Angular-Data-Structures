import { Component } from '@angular/core';

interface Movie {
  title: string;
  time: string;  // Added time field
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: Movie[] = [
    { title: 'Inception', time: '8:00 PM' },
    { title: 'The Matrix', time: '6:30 PM' },
    { title: 'Interstellar', time: '9:00 PM' },
  ];

  newMovie: Movie = { title: '', time: '' };

  addMovie() {
    if (this.newMovie.title && this.newMovie.time) {
      this.movies.push({ ...this.newMovie });
      this.newMovie = { title: '', time: '' }; // Reset the form
    }
  }

  removeMovie(title: string) {
    this.movies = this.movies.filter(movie => movie.title !== title);
  }
}
