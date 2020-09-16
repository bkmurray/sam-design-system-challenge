import { NgModule } from '@angular/core';
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
    providers: []
  })
  export class EntityDisplayPageModule { }