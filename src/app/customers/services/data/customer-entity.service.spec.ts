import { TestBed } from '@angular/core/testing';
import {
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { CustomerEntityService } from './customer-entity.service';

describe('CustomerEntityService', () => {
  let service: CustomerEntityService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        EntityCollectionServiceElementsFactory,
        CustomerEntityService
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(CustomerEntityService)
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
