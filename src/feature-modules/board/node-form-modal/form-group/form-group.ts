import { FormGroup, FormControl, Validators } from '@angular/forms';

export function getNodeForm() {
  return new FormGroup({
    author: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });
}
