import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';

type Order = {
  order: string;
  date: string;
  status: string;
};
@Component({
  selector: 'app-account-panel',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './account-panel.component.html',
  styleUrl: './account-panel.component.scss',
})
export class AccountPanelComponent {
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  public option: string = 'konto';

  // tabela
  public ordersHead: string[] = ['Numer zamówienia', 'Status', 'Data złożenia'];
  public ordersBody: Array<Order> = [
    {
      order: '0000000002',
      date: '20-06-2024',
      status: 'Wysłane',
    },
    {
      order: '0000000001',
      date: '12-06-2024',
      status: 'Zakończono',
    },
  ];

  // form
  public dataFormGroup!: FormGroup;

  ngOnInit() {
    this.dataFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
    this.handleData();
  }
  handleData() {
    const user = this.accountService.getUser();
    this.dataFormGroup.patchValue({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user.address,
    });
  }
  handleOption(option: string) {
    this.option = option;
  }
}
