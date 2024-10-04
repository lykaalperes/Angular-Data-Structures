import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: Employee[] = [
  ];

  newEmployee: Employee = { id: 0, name: '', position: '' };

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.position) {
      this.newEmployee.id = this.employees.length + 1;
      this.employees.push({ ...this.newEmployee });
      this.newEmployee = { id: 0, name: '', position: '' };
    }
  }

  removeEmployee(id: number) {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }
}
