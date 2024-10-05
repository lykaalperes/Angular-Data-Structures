import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css'],
})
export class LanguageListComponent {
  languages: string[] = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'Ruby',
    'PHP',
    'Swift',
    'Go',
    'Kotlin',
    'TypeScript',
    'Rust',
    'Dart',
  ];

  newLanguage: string = '';

  addLanguage() {
    if (this.newLanguage) {
      this.languages.push(this.newLanguage);
      this.newLanguage = ''; // Clear the input field
    }
  }

  removeLanguage(index: number) {
    this.languages.splice(index, 1);
  }
}
