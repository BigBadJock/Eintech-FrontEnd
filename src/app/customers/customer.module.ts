import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './Customer-routing.module';
import { CustomerHttpService } from './services/Customer-http.service';
import { CustomerEntityService } from './services/data/customer-entity.service';
import { CustomerResolver } from './services/data/customer-resolver';
import { EntityDefinitionService, EntityDataService, EntityMetadataMap } from '@ngrx/data';
import { compareCustomer } from './services/data/customer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const entityMetadata: EntityMetadataMap = {
  Customer: {
    sortComparer: compareCustomer
  }
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
