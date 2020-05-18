import { RegistrationForm } from './form';
import { FormBuilder } from '@angular/forms';

describe('forms', () => {
  let component: RegistrationForm;

  beforeEach(() => {
    component = new RegistrationForm(new FormBuilder());
  });

  it('should create a form with two fields email and password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('email must be required', () => {
    const field = component.form.get('email');
    field.setValue('');
    expect(field.valid).toBeFalsy();
  });

  it('mail should be valid', () => {
    const control = component.form.get('email');
    control.setValue('jonny@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
