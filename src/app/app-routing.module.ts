import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Customer',
    pathMatch: 'full'
  },
  {
    path: 'Customer',
    loadChildren: () => import('./Customers/Customer.module').then((module) => module.CustomerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
