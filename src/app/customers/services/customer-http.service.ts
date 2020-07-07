import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Customer } from './data/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerHttpService extends DefaultDataService<Customer> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Customer', http, httpUrlGenerator);
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/Customer');
  }
}
