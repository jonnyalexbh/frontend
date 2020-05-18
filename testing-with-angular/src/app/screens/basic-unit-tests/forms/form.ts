import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class RegistrationForm {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
