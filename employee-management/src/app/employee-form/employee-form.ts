import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeFormComponent {
  name = '';
  dept = '';
  salary = 0;
  email = '';
  emailError = '';
  submitted = false;

  constructor(private svc: EmployeeService) {}

  isValidEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email.trim());
  }

  onEmailChange() {
    if (this.submitted || this.email) {
      this.validateEmail();
    }
  }

  validateEmail(): boolean {
    if (!this.email.trim()) {
      this.emailError = 'Email is required.';
      return false;
    } else if (!this.isValidEmail(this.email)) {
      this.emailError = 'Enter a valid email e.g. name@example.com';
      return false;
    }
    this.emailError = '';
    return true;
  }

  submit() {
    this.submitted = true;
    if (!this.name.trim()) return;
    if (!this.dept.trim()) return;
    if (!this.validateEmail()) return;

    this.svc.add({
      name: this.name.trim(),
      dept: this.dept.trim(),
      salary: this.salary,
      email: this.email.trim()
    });

    this.name = '';
    this.dept = '';
    this.salary = 0;
    this.email = '';
    this.emailError = '';
    this.submitted = false;
  }
}
