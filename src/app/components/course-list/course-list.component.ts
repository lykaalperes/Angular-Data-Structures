import { Component } from '@angular/core';

interface Course {
  title: string; // Removed ID
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  courses: Course[] = [
  ];

  newCourse: Course = { title: '' }; // Adjusted to remove ID

  addCourse() {
    if (this.newCourse.title) {
      this.courses.push({ ...this.newCourse });
      this.newCourse = { title: '' }; // Reset the form
    }
  }

  removeCourse(title: string) {
    this.courses = this.courses.filter(course => course.title !== title);
  }
}
