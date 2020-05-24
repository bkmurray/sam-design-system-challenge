import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AwardeeFilterService } from '../integrity-filters/awardees-filter/awardees-filter.service';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { IntegrityInfoWsItemModule } from './integrity-info-ws-item/integrity-info-ws-item.module';
import { IntegrityInfoWorkspaceRoutingModule } from './integrity-info-workspace-routing.module';
import { IntegrityInfoWorkspaceComponent } from './integrity-info-workspace.component';

@NgModule({
  declarations: [IntegrityInfoWorkspaceComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule, 
    SearchListServiceModule,
    IntegrityInfoWsItemModule,
    IntegrityInfoWorkspaceRoutingModule
  ],
  exports: [IntegrityInfoWorkspaceComponent],
  providers: [SDSFormlyUpdateComunicationService, AwardeeFilterService]
})
export class IntegrityInfoWorkspaceModule { }
