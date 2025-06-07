import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

type Error = {
  status: string;
  message: string;
  active: boolean;
};
import { UsersService } from '../../../core/services/users.service';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsersService,
    private accountService: AccountService
  ) {}

  public loginFormGroup!: FormGroup;
  public error: Error = {
    status: '',
    message: '',
    active: false,
  };

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, this.customEmailValidator()],
      ],
      password: ['', [Validators.required]],
    });
    const user = sessionStorage.getItem('account');
    if (user) this.router.navigate(['/']);
  }
  get email() {
    return this.loginFormGroup.get('email');
  }
  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const valid = emailRegex.test(control.value);
      return valid ? null : { invalidEmail: { value: control.value } };
    };
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

  onSubmit(): void {
    if (this.loginFormGroup.invalid) {
      this.markAllAsTouched(this.loginFormGroup);
    } else {
      const { email, password } = this.loginFormGroup.value;
      const getUser = this.service.getUser(email, password);
      if (getUser) {
        this.accountService.handleAccount(getUser);
        this.router.navigate(['/']);
      } else this.setError('error', 'Niepoprawny email lub hasło.', true);
    }
  }
  setError(status: string, message: string, active: boolean) {
    this.error.status = status;
    this.error.message = message;
    this.error.active = active;
  }
}
