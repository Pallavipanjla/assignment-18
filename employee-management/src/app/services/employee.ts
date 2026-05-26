import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  dept: string;
  salary: number;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'Pallavi', dept: 'IT', salary: 50000, email: 'pallavi@gmail.com' }
  ];
  private nextId = 2;

  getAll(): Employee[] {
    return this.employees;
  }

  add(emp: Omit<Employee, 'id'>): void {
    this.employees.push({ id: this.nextId++, ...emp });
  }

  update(updated: Employee): void {
    const i = this.employees.findIndex(e => e.id === updated.id);
    if (i > -1) this.employees[i] = updated;
  }

  delete(id: number): void {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
