import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[Greeting],
  template: `
    <h1>Home Page</h1>
    <p>Welcome to Home Component 🚀</p>
  `
})
export class HomeComponent {
  message = signal('Hello, world');
}
