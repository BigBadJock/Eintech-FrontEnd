import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then((module) => module.PeopleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
