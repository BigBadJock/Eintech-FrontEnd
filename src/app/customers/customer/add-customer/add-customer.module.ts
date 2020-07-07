import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCustomerRoutingModule } from './add-customer-routing.module';
import { AddCustomerShellComponent } from './add-customer-shell/add-customer-shell.component';
import { AddCustomerDisplayComponent } from './add-customer-display/add-customer-display.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddCustomerShellComponent, AddCustomerDisplayComponent],
  imports: [
    CommonModule,
    AddCustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddCustomerModule { }
