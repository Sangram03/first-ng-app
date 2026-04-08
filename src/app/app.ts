import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { HomeComponent } from "./home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header>
      <main>
        <app-home/>
      </main>
    </app-header>

    <h1>{{ title() }}</h1>

    <router-outlet></router-outlet>
  `, styles:[
    `
    main {
      padding: 16px;
    }`
  ]
})
export class App {
  title = signal('My Angular App');
}
