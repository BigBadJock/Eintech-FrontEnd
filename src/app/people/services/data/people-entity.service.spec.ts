import { TestBed } from '@angular/core/testing';
import {
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { PeopleEntityService } from './people-entity.service';

describe('PersonService', () => {
  let service: PeopleEntityService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        EntityCollectionServiceElementsFactory,
        PeopleEntityService
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(PeopleEntityService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
