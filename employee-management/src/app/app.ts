import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form';
import { EmployeeListComponent } from './employee-list/employee-list';
import { EmployeeService } from './services/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent, EmployeeListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  constructor(private svc: EmployeeService) {}

  get employees() { return this.svc.getAll(); }

  get departments() {
    return [...new Set(this.employees.map(e => e.dept))];
  }
}
