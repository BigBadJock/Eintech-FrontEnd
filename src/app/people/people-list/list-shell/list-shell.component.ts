import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../services/data/person';
import { PeopleEntityService } from '../../services/data/people-entity.service';

@Component({
  selector: 'app-list-shell',
  templateUrl: './list-shell.component.html',
  styleUrls: ['./list-shell.component.scss']
})
export class ListShellComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(private entityService: PeopleEntityService) {
    this.people$ = entityService.entities$;
   }

  ngOnInit(): void {
  }

}
