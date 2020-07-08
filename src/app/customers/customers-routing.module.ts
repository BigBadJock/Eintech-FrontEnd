import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerResolver } from './services/data/customer-resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    loadChildren: () => import('./Customer-list/Customer-list.module').then((module) => module.CustomerListModule),
    resolve: {
      Customer: CustomerResolver,
    }
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((module) => module.CustomerModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
