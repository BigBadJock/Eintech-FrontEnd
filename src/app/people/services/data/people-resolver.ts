import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from './person.service';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class PeopleResolver implements Resolve<boolean> {
  constructor(private personService: PersonService) { }

  resolve(): Observable<boolean>{
    return this.personService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.personService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first(),
    );
  }
}
