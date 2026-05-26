import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../services/employee';
import { DepartmentFilterPipe } from '../pipes/department-filter-pipe';
import { NameFilterPipe } from '../pipes/name-filter-pipe';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DepartmentFilterPipe, NameFilterPipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeListComponent {
  selectedDept = '';
  searchName = '';
  editingId: number | null = null;
  editData: Partial<Employee> = {};

  constructor(private svc: EmployeeService) {}

  get employees() { return this.svc.getAll(); }

  get departments() {
    return [...new Set(this.employees.map(e => e.dept))];
  }

  startEdit(emp: Employee) {
    this.editingId = emp.id;
    this.editData = { ...emp };
  }

  saveEdit() {
    this.svc.update(this.editData as Employee);
    this.editingId = null;
  }

  cancelEdit() { this.editingId = null; }
  delete(id: number) { this.svc.delete(id); }
}
