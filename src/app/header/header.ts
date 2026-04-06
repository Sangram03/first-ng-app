import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav style="background:black; color:white; padding:10px;">
      <h2>My App Header</h2>
    </nav>
  `
})
export class HeaderComponent {}
