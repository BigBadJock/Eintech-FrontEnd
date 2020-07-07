import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListRoutingModule } from './Customer-list-routing.module';
import { ListShellComponent } from './list-shell/list-shell.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListShellComponent, ListDisplayComponent, CustomerDisplayComponent],
  imports: [
    CommonModule,
    CustomerListRoutingModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomerListModule { }
