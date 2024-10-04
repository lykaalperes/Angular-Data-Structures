import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [
  ];

  newStudentName: string = '';
  newStudentAge: number | undefined;
  newStudentId: number | undefined;

  fetchStudentId: number | undefined;
  fetchedStudent: Student | undefined;

  addStudent(newStudent: { name: string; id: number | undefined; age: number | undefined }) {
    if (newStudent.id && newStudent.name && newStudent.age) {
      this.students.push(<Student>newStudent);
      this.newStudentName = '';
      this.newStudentAge = undefined;
      this.newStudentId = undefined;
    } else {
      console.log('Please fill in all fields');
    }
  }

  removeStudent(studentId: number) {
    this.students = this.students.filter(student => student.id !== studentId);
  }

  getStudent(studentId: number | undefined): Student | undefined {
    return this.students.find(student => student.id === studentId);
  }
}

export interface Student {
  id: number;
  name: string;
  age: number;
}
