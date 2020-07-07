import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleService } from './services/people.service';
import { PersonService } from './services/data/person.service';
import { PeopleResolver } from './services/data/people-resolver';
import { EntityMetadata, EntityDefinitionService, EntityDataService, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Person: {

  }
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  providers: [
    PeopleService,
    PersonService,
    PeopleResolver
  ]
})
export class PeopleModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private peopleService: PeopleService,
  )
  {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Person', peopleService);
  }
 }
