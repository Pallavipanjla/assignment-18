import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../services/employee';

@Pipe({ name: 'departmentFilter', standalone: true })
export class DepartmentFilterPipe implements PipeTransform {
  transform(employees: Employee[], dept: string): Employee[] {
    if (!dept) return employees;
    return employees.filter(e => e.dept === dept);
  }
}
