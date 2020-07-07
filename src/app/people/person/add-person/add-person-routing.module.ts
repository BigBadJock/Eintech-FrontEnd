import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonShellComponent } from './add-person-shell/add-person-shell.component';


const routes: Routes = [
  {
    path: '',
    component: AddPersonShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPersonRoutingModule { }
