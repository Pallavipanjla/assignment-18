import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../services/employee';

@Pipe({ name: 'nameFilter', standalone: true })
export class NameFilterPipe implements PipeTransform {
  transform(employees: Employee[], search: string): Employee[] {
    if (!search || !search.trim()) return employees;
    const lower = search.toLowerCase().trim();
    return employees.filter(e => e.name.toLowerCase().includes(lower));
  }
}
