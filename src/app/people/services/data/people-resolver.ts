import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleEntityService } from './people-entity.service';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class PeopleResolver implements Resolve<boolean> {
  constructor(private entityService: PeopleEntityService) { }

  resolve(): Observable<boolean>{
    return this.entityService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.entityService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first(),
    );
  }
}
