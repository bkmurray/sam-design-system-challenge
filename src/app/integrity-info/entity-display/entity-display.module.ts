import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SamEntityDisplayComponent } from './entity-display.component';
import { EntityDisplayRoutingModule } from './entity-display-routing.module';

@NgModule({
    declarations: [SamEntityDisplayComponent],
    imports: [
      CommonModule,
      RouterModule,
      FontAwesomeModule,
      EntityDisplayRoutingModule
    ],
    exports: [SamEntityDisplayComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  })
  export class EntityDisplayPageModule { }