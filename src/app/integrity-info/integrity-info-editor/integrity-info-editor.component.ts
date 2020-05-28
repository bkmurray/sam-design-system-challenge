import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { SdsFormlyEditorPage, SdsFormlyEditorComponent } from '../../components/public-apis';
import { IntegrityInfoFormService } from './integrity-info-form/integrity-info-form.service';
import { IntegrityEditorService } from './integrity-editor-service/integrity-editor.service';

import { FormGroup, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

/**
 * You see how small this class is.  Most of the functionality for the multi-page data entry editor has been moved into a recommended
 * common component that isn't in the design system yet.  This class provides the page definitions (via the form service) and the
 * back end service.  But it relies on the recommended common component to manage the form pages.  The common component is just a proof of
 * concept so far, not a fully robust implementation.
 */
@Component({
  selector: 'app-integrity-info-editor',
  templateUrl: './integrity-info-editor.component.html',
  styleUrls: ['./integrity-info-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IntegrityInfoFormService, IntegrityEditorService]
})
export class IntegrityInfoEditorComponent implements OnInit {

  pages: SdsFormlyEditorPage[];
  forms: FormArray;

  subheader = {
    actions: [
      { id: 'downloadAction', icon: 'download', text: 'Download' }
    ]
  };

  @ViewChild(SdsFormlyEditorComponent, {static: true}) editor: SdsFormlyEditorComponent;

  constructor(public formService: IntegrityInfoFormService, public service: IntegrityEditorService) { 
      this.pages = formService.pages;
      this.forms = new FormArray(this.pages.map(() => new FormGroup({})));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onModelChange(change: any) {
  	console.log(`%cLog: model change`, 'color: blue; font-weight: bold')
  }

  saveRecord() {
    this.service.save(this.formService.model);
  }

  subheaderActionClicked(event) {
	console.log(`%cLog: Download clicked`, 'color: blue; font-weight: bold');
  }

}
