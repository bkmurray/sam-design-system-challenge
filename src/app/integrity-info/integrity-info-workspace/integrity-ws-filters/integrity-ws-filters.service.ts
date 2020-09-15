import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SDSAutocompletelConfiguration, SelectionMode } from '@gsa-sam/components';

import {
  IntegrityTypeFilter,
  AwardeeNameFilterService,
  AwardeeCageFilterService,
  AwardeeUeidunsFilterService,
  HierarchyFilterService,
} from '../../../common/public-apis';

/**
 * This service manages the formly filter definitions and model.
 */
@Injectable()
export class IntegrityWsFiltersService {

  recordTypeSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  ueiDunsSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  cageSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  awardeeNameSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

  constructor(
    private recordTypeFilter: IntegrityTypeFilter,
    private awardeeNameService: AwardeeNameFilterService,
    private awardeeUeidunsService: AwardeeUeidunsFilterService,
    private awardeeCageService: AwardeeCageFilterService,
    private hierarchyService: HierarchyFilterService
  ) {

 		this.recordTypeSettings.id = 'recordType';
		this.recordTypeSettings.primaryKeyField = 'label';
		this.recordTypeSettings.primaryTextField = 'label';
		this.recordTypeSettings.secondaryTextField = '';
		this.recordTypeSettings.labelText = 'label';
		this.recordTypeSettings.selectionMode = SelectionMode.MULTIPLE;
		this.recordTypeSettings.autocompletePlaceHolderText = 'Select...';
		this.recordTypeSettings.debounceTime = 100;

  		this.ueiDunsSettings.id = 'ueiduns';
		this.ueiDunsSettings.primaryKeyField = 'DUNS';
		this.ueiDunsSettings.primaryTextField = 'AWARDEE';
		this.ueiDunsSettings.secondaryTextField = 'DUNS';
		this.ueiDunsSettings.labelText = 'Awardee Duns';
		this.ueiDunsSettings.selectionMode = SelectionMode.MULTIPLE;
		this.ueiDunsSettings.autocompletePlaceHolderText = 'Ex: 123456789';
		this.ueiDunsSettings.debounceTime = 100;

  		this.cageSettings.id = 'cageCode';
		this.cageSettings.primaryKeyField = 'CAGE';
		this.cageSettings.primaryTextField = 'AWARDEE';
		this.cageSettings.secondaryTextField = 'CAGE';
		this.cageSettings.labelText = 'Awardee CAGE';
		this.cageSettings.selectionMode = SelectionMode.MULTIPLE;
		this.cageSettings.autocompletePlaceHolderText = 'Ex: N5940';
		this.cageSettings.debounceTime = 100;

  		this.awardeeNameSettings.id = 'awardeeName';
		this.awardeeNameSettings.primaryKeyField = 'AWARDEE';
		this.awardeeNameSettings.primaryTextField = 'AWARDEE';
		this.awardeeNameSettings.secondaryTextField = 'DUNS';
		this.awardeeNameSettings.labelText = 'Awardee Name';
		this.awardeeNameSettings.selectionMode = SelectionMode.MULTIPLE;
		this.awardeeNameSettings.autocompletePlaceHolderText = 'Legal Business Name';
		this.awardeeNameSettings.debounceTime = 100;
  }

  public model = {};

  public filters: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Search by Keyword' },
      fieldGroup: [{
        key: 'keyword',
        id: 'key',
        type: 'input',
        templateOptions: {
          label: 'Keyword',
          placeholder: '',
          inputType: 'text'
        }
      }],
    },
    {
      key: 'searchEntity',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Entity' },
      fieldGroup: [
        {
          key: 'ueiDUNS',
          id: 'duns',
          type: 'input',
          templateOptions: {
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            placeholder: '',
            inputType: 'text',
            inputStyle: 'error'
          }
        },
        {
          key: 'uei',
          type: 'input',
          templateOptions: {
            tagText: 'SAM',
            label: 'Unique Entity ID',
            placeholder: '',
            inputType: 'text',
            inputStyle: 'error',
          }
        },
        {
          key: 'cageCode',
          type: 'input',
          templateOptions: {
            label: 'CAGE/NCAGE',
            placeholder: '',
            inputType: 'text'
          }
        },
        {
          key: 'legalBusinessName',
          type: 'input',
          templateOptions: {
            label: 'Legal Business Name',
            placeholder: '',
            inputType: 'text'
          }
        }
      ],
    },
    {
      key: 'status',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Status' },
      fieldGroup: [
        {
          key: 'statusCode',
          id: 'status',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Status',
            labelClass: 'usa-sr-only',
            options: [
              {
                key: '4',
                value: 'Active'
              },
              {
                key: '1',
                value: 'Draft'
              },
              {
                key: '3',
                value: 'Submitted'
              },
              {
                key: '5',
                value: 'Expired'
              },
              {
                key: '2',
                value: 'Work in Progress'
              }
            ],
          }
        }
      ],
    },
    {
      key: 'expirationDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDays',
          id: 'exp',
          type: 'radio',
          templateOptions: {
            label: 'Expiration Date',
            labelClass: 'usa-sr-only',
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' }
            ]
          }
        }
      ],
    },
    {
      key: 'addressUpdate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Address Update' },
      fieldGroup: [
        {
          key: 'addressUpdateFlag',
          id: 'addr',
          type: 'radio',
          templateOptions: {
            label: 'Address Update',
            labelClass: 'usa-sr-only',
            options: [
              { label: 'Update Required', value: 'Y' },
              { label: 'Update Not Required', value: 'N' }
            ]
          }
        }
      ],
    },
    {
      key: 'samReg',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'SAM Registration' },
      fieldGroup: [
        {
          key: 'samReg',
          id: 'sam',
          type: 'multicheckbox',
          templateOptions: {
            label: 'SAM Registration',
            labelClass: 'usa-sr-only',
            options: [
              { key: 'reg', value: 'Registered' },
              { key: 'id', value: 'ID Only' }
            ]
          }          
        }
      ],
    }
  ];
}
