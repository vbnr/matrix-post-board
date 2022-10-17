import { FormGroup, FormControl, Validators } from '@angular/forms';

export function getLoginForm() {
  return new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
}
