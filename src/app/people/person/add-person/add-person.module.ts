import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPersonRoutingModule } from './add-person-routing.module';
import { AddPersonShellComponent } from './add-person-shell/add-person-shell.component';
import { AddPersonDisplayComponent } from './add-person-display/add-person-display.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddPersonShellComponent, AddPersonDisplayComponent],
  imports: [
    CommonModule,
    AddPersonRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddPersonModule { }
