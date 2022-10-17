import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getLoginForm } from './form-group/form-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly form = getLoginForm();

  constructor(private router: Router) {}

  onSubmit() {
    this.form.markAsDirty();
    this.form.updateValueAndValidity();

    if (this.form.invalid) {
      return;
    }

    // Normally we will call a http service

    localStorage.setItem('token', 'VALID');

    this.router.navigateByUrl('/board');
  }
}
