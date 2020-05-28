import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {
  SdsToolbarModule,
  SdsAccordionModule,
  SdsSideNavigationModule,
} from '@gsa-sam/components';

import { SdsFiltersModule } from '@gsa-sam/sam-formly';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { SdsFormlyEditorPageComponent, SdsFormlyEditorComponent } from './sds-formly-editor.component';

@NgModule({
  declarations: [SdsFormlyEditorPageComponent, SdsFormlyEditorComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSideNavigationModule,
    ReactiveFormsModule,
    FormsModule,
    FormlySelectModule,
    FormlyModule.forRoot(),
    SdsFiltersModule
  ],
  exports: [SdsFormlyEditorPageComponent, SdsFormlyEditorComponent]
})
export class SdsFormlyEditorModule { 
  constructor() {
   library.add(fas, sds);
  }
}
