import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header';
import { StudentComponent } from './components/student/student';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    HeaderComponent,
    StudentComponent,
    FooterComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}
