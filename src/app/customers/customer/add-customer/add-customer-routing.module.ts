import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerShellComponent } from './add-customer-shell/add-customer-shell.component';


const routes: Routes = [
  {
    path: '',
    component: AddCustomerShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCustomerRoutingModule { }
