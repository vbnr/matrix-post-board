import { Component } from '@angular/core';

@Component({
  selector: 'app-error-form-control',
  template: `<div class="error-message">
    <ng-content> </ng-content>
  </div> `,
  styles: [
    `
      .error-message {
        color: #dc3545;
        font-size: 0.875em;
      }
    `,
  ],
})
export class ErrorFormControlComponent {}
