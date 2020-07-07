import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Person } from './data/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeopleService extends DefaultDataService<Person> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) { 
    super('Person', http, httpUrlGenerator);
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>('/api/people');
  }
}
