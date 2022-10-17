import { Component } from '@angular/core';

@Component({
  // A new feature of Angular 14
  standalone: true,
  selector: 'app-not-found',
  template: '<h1>404...</h1>',
})
export class NotFoundComponent {}
