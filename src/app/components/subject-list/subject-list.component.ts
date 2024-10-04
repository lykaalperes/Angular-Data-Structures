import { Component } from '@angular/core';

interface Subject {
  name: string;
  description: string;
  units: number;
  time: string;
  schedule: string;
}

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent {
  subjects: Subject[] = [
    {
      name: 'Mathematics',
      description: 'Calculus and analytical geometry',
      units: 3,
      time: '8:00 AM - 9:30 AM',
      schedule: 'Mon/Wed/Fri'
    },
    {
      name: 'Science',
      description: 'Physics and laboratory experiments',
      units: 4,
      time: '10:00 AM - 12:00 PM',
      schedule: 'Tue/Thu'
    },
    {
      name: 'English',
      description: 'Advanced grammar and literature',
      units: 3,
      time: '1:00 PM - 2:30 PM',
      schedule: 'Mon/Wed/Fri'
    }
  ];

  newSubject: Subject = { name: '', description: '', units: 0, time: '', schedule: '' };

  addSubject() {
    if (this.newSubject.name && this.newSubject.description && this.newSubject.units > 0) {
      this.subjects.push({ ...this.newSubject });
      this.newSubject = { name: '', description: '', units: 0, time: '', schedule: '' }; // Reset the form
    }
  }

  removeSubject(name: string) {
    this.subjects = this.subjects.filter(subject => subject.name !== name);
  }
}
