import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>

    <h1>{{ title() }}</h1>

    <router-outlet></router-outlet>
  `,
})
export class App {
  title = signal('My Angular App');
}
