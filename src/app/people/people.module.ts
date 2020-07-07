import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleHttpService } from './services/people-http.service';
import { PeopleEntityService } from './services/data/people-entity.service';
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
    PeopleHttpService,
    PeopleEntityService,
    PeopleResolver
  ]
})
export class PeopleModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private httpService: PeopleHttpService,
  )
  {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Person', httpService);
  }
 }
