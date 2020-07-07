import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleListRoutingModule } from './people-list-routing.module';
import { ListShellComponent } from './list-shell/list-shell.component';
import { ListDisplayComponent } from './list-display/list-display.component';


@NgModule({
  declarations: [ListShellComponent, ListDisplayComponent],
  imports: [
    CommonModule,
    PeopleListRoutingModule
  ]
})
export class PeopleListModule { }
