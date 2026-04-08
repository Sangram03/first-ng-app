import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
export class Greeting {
  message = signal('Hello, world');
}
