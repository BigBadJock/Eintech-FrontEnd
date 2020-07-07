import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCustomerModalComponent } from './update-customer-modal/update-customer-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateCustomerModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class UpdateCustomerModule { }
