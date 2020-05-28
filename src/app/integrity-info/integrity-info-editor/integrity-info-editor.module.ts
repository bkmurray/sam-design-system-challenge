import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { SdsFormlyEditorModule } from '../../components/public-apis';

import { IntegrityTypeFilter, 
  	 BaseAwardeeFilterService,
     AwardeeNameFilterService,
     AwardeeCageFilterService,
     AwardeeUeidunsFilterService,
     HierarchyFilterService,
     StateFilterService } from '../../common/public-apis';

import { IntegrityInfoEditorRoutingModule } from './integrity-info-editor-routing.module';
import { IntegrityInfoEditorComponent } from './integrity-info-editor.component';

@NgModule({
  declarations: [IntegrityInfoEditorComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlyModule,
    SdsSubheaderModule,
    SdsFormlyEditorModule,
    IntegrityInfoEditorRoutingModule
  ],
  providers: [
  	 IntegrityTypeFilter, 
  	 BaseAwardeeFilterService,
     AwardeeNameFilterService,
     AwardeeCageFilterService,
     AwardeeUeidunsFilterService,
     HierarchyFilterService,
     StateFilterService
  ]
})
export class IntegrityInfoEditorModule { }
