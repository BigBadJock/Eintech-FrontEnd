import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../services/data/person';
import { PersonService } from '../../services/data/person.service';

@Component({
  selector: 'app-list-shell',
  templateUrl: './list-shell.component.html',
  styleUrls: ['./list-shell.component.scss']
})
export class ListShellComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(private personService: PersonService) {
    this.people$ = personService.entities$;
   }

  ngOnInit(): void {
  }

}
