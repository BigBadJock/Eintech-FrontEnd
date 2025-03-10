import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Customer } from './customer';

@Injectable({ providedIn: 'root' })
export class CustomerEntityService extends EntityCollectionServiceBase<Customer> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Customer', serviceElementsFactory);
  }
}
