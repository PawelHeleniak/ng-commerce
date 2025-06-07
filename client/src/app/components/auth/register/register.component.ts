import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

type Error = {
  status: string;
  message: string;
  active: boolean;
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  public registerFormNumber: number = 1;
  public minLength: number = 8;

  public registerFormGroup!: FormGroup;
  public register2FormGroup!: FormGroup;
  public error: Error = {
    status: '',
    message: '',
    active: false,
  };

  ngOnInit() {
    this.registerFormGroup = this.fb.group(
      {
        email: [
          '',
          [Validators.required, Validators.email, this.customEmailValidator()],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(this.minLength),
            this.containsUppercase,
          ],
        ],
        repeatPassword: ['', [Validators.required]],
      },
      { validator: this.invalidPasswordsMatch('password', 'repeatPassword') }
    );
    this.register2FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: [''],
      address: [''],
    });
    const user = sessionStorage.getItem('account');
    if (user) this.router.navigate(['/']);
  }
  markAllAsTouched(control: AbstractControl) {
    if (control instanceof FormGroup) {
      Object.values(control.controls).forEach((ctrl) => {
        this.markAllAsTouched(ctrl);
      });
    } else {
      control.markAsTouched();
    }
  }
  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const valid = emailRegex.test(control.value);
      return valid ? null : { invalidEmail: { value: control.value } };
    };
  }
  containsUppercase(control: AbstractControl): ValidationErrors | null {
    const hasUppercase = /[A-Z]/.test(control.value);
    return !hasUppercase ? { uppercase: true } : null;
  }
  invalidPasswordsMatch(password: string, repeatPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordValue = control.get(password)?.value;
      const repeatPasswordValue = control.get(repeatPassword)?.value;

      if (passwordValue !== repeatPasswordValue) {
        return { invalidPasswordsMatch: true };
      }
      return null;
    };
  }
  onSubmit(): void {
    if (this.registerFormGroup.invalid) {
      this.markAllAsTouched(this.registerFormGroup);
    } else {
      this.registerFormNumber = 2;
    }
  }
  onSubmit2(): void {
    if (this.register2FormGroup.invalid) {
      this.markAllAsTouched(this.register2FormGroup);
    } else {
      this.router.navigate(['/logowanie']);
    }
  }
}
