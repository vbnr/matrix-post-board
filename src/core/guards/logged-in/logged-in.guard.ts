import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/board');
      return false;
    }

    return true;
  }
}
