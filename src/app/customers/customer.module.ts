import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './Customer-routing.module';
import { CustomerHttpService } from './services/Customer-http.service';
import { CustomerEntityService } from './services/data/customer-entity.service';
import { CustomerResolver } from './services/data/Customer-resolver';
import { EntityMetadata, EntityDefinitionService, EntityDataService, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Customer: {

  }
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  providers: [
    CustomerHttpService,
    CustomerEntityService,
    CustomerResolver
  ]
})
export class CustomerModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private httpService: CustomerHttpService,
  )
  {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Customer', httpService);
  }
 }
