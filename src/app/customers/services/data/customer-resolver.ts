import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerEntityService } from './customer-entity.service';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class CustomerResolver implements Resolve<boolean> {
  constructor(private entityService: CustomerEntityService) { }

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
