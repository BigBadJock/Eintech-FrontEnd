import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleResolver } from './services/data/people-resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    loadChildren: () => import('./people-list/people-list.module').then((module) => module.PeopleListModule),
    resolve: {
      people: PeopleResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
