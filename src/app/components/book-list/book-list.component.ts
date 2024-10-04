import { Component } from '@angular/core';

interface Book {
  title: string; // Removed ID
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books: Book[] = [
  ];

  newBook: Book = { title: '' }; // Adjusted to remove ID

  addBook() {
    if (this.newBook.title) {
      this.books.push({ ...this.newBook });
      this.newBook = { title: '' }; // Reset the form
    }
  }

  removeBook(title: string) {
    this.books = this.books.filter(book => book.title !== title);
  }
}
