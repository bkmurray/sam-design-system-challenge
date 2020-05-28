import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';

import { SdsFormlyEditorPage } from '../../../components/public-apis';

import { IntegrityTypeFilter, 
     AwardeeNameFilterService,
     AwardeeCageFilterService,
     AwardeeUeidunsFilterService,
     HierarchyFilterService,
     StateFilterService } from '../../../common/public-apis';

/* 
 * This service manages the data entry form pages definitions.
 */
@Injectable()
export class IntegrityInfoFormService {

  public model:any = {};

  recordTypeSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  ueiDunsSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  cageSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  awardeeNameSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  hierarchySettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  stateSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

  constructor(private recordTypeFilter: IntegrityTypeFilter, 
  	private awardeeNameService: AwardeeNameFilterService,
  	private awardeeUeidunsService: AwardeeUeidunsFilterService,
  	private awardeeCageService: AwardeeCageFilterService,
  	private hierarchyService: HierarchyFilterService,
  	private stateService: StateFilterService) { 

  		this.recordTypeSettings.id = 'recordType';
		this.recordTypeSettings.primaryKeyField = 'label';
		this.recordTypeSettings.primaryTextField = 'label';
		this.recordTypeSettings.secondaryTextField = '';
		this.recordTypeSettings.labelText = 'label';
		this.recordTypeSettings.selectionMode = SelectionMode.SINGLE;
		this.recordTypeSettings.autocompletePlaceHolderText = 'Select...';
		this.recordTypeSettings.debounceTime = 100;

  		this.ueiDunsSettings.id = 'ueiduns';
		this.ueiDunsSettings.primaryKeyField = 'DUNS';
		this.ueiDunsSettings.primaryTextField = 'AWARDEE';
		this.ueiDunsSettings.secondaryTextField = 'DUNS';
		this.ueiDunsSettings.labelText = 'Awardee Duns';
		this.ueiDunsSettings.selectionMode = SelectionMode.SINGLE;
		this.ueiDunsSettings.autocompletePlaceHolderText = 'Ex: 123456789';
		this.ueiDunsSettings.debounceTime = 100;

  		this.cageSettings.id = 'cageCode';
		this.cageSettings.primaryKeyField = 'CAGE';
		this.cageSettings.primaryTextField = 'AWARDEE';
		this.cageSettings.secondaryTextField = 'CAGE';
		this.cageSettings.labelText = 'Awardee CAGE';
		this.cageSettings.selectionMode = SelectionMode.SINGLE;
		this.cageSettings.autocompletePlaceHolderText = 'Ex: N5940';
		this.cageSettings.debounceTime = 100;

  		this.awardeeNameSettings.id = 'awardeeName';
		this.awardeeNameSettings.primaryKeyField = 'AWARDEE';
		this.awardeeNameSettings.primaryTextField = 'AWARDEE';
		this.awardeeNameSettings.secondaryTextField = 'DUNS';
		this.awardeeNameSettings.labelText = 'Awardee Name';
		this.awardeeNameSettings.selectionMode = SelectionMode.SINGLE;
		this.awardeeNameSettings.autocompletePlaceHolderText = 'Legal Business Name';
		this.awardeeNameSettings.debounceTime = 100;

  		this.hierarchySettings.id = 'agency';
		this.hierarchySettings.primaryKeyField = 'subtier';
		this.hierarchySettings.primaryTextField = 'subtier';
		this.hierarchySettings.secondaryTextField = 'agencyCode';
		this.hierarchySettings.labelText = 'Agency';
		this.hierarchySettings.selectionMode = SelectionMode.SINGLE;
		this.hierarchySettings.autocompletePlaceHolderText = 'Enter an agency name or code';
		this.hierarchySettings.debounceTime = 100;

  		this.stateSettings.id = 'state';
		this.stateSettings.primaryKeyField = 'label';
		this.stateSettings.primaryTextField = 'label';
		this.stateSettings.secondaryTextField = '';
		this.stateSettings.labelText = 'label';
		this.stateSettings.selectionMode = SelectionMode.SINGLE;
		this.stateSettings.autocompletePlaceHolderText = 'Select...';
		this.stateSettings.debounceTime = 100;

	}

	pages: SdsFormlyEditorPage[] = [
		{ 
			id: "documentInfo",
		  	title: "Document Information",
		  	instruction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		  	fields: [
			  	{
				  	key: 'recordType',
				  	type: 'autocomplete',
				  	templateOptions: { 
				  		label: 'Record Type',
				  		required: true,
				  		service: this.recordTypeFilter,
				  		configuration: this.recordTypeSettings,
				  		model: this.recordTypeFilter.model
				  	}
			    },
				{
					key: 'actionDate',
					type: 'datepicker',
					templateOptions: {
						label: 'Action Date',
						required: true
					}
				},
				{
				    key: 'awardId',
				    type: 'input',
				    templateOptions: { 
				      label: 'Contract / Grant Award ID Number',
				      required: true
				    }
				},
				{
				    key: 'awardReferenceId',
				    type: 'input',
				    templateOptions: { 
				      label: 'Contract Referenced Award ID Number'
				    }
				}
			]	
		 },
		 { 
			id: "awardeeInfo",
		  	title: "Awardee Information",
		  	instruction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		  	fields: [
				{
				    key: 'ueiDuns',
				    type: 'autocomplete',
				    templateOptions: { 
				      label: 'Unique Entity ID',
				      required: true,
				  	  service: this.awardeeUeidunsService,
				  	  configuration: this.ueiDunsSettings,
				  	  model: this.awardeeUeidunsService.model
				    }
				},
				{
				    key: 'cage',
				    type: 'autocomplete',
				    templateOptions: { 
				      label: 'CAGE / NCAGE',
				      required: true,
				  	  service: this.awardeeCageService,
				  	  configuration: this.cageSettings,
				  	  model: this.awardeeCageService.model
				    }
				},
				{
				    key: 'awardeeName',
				    type: 'autocomplete',
				    templateOptions: { 
				      label: 'Awardee Name',
				      required: true,
				  	  service: this.awardeeNameService,
				  	  configuration: this.awardeeNameSettings,
				  	  model: this.awardeeNameService.model
				    }
				},
				{
			        key: 'country',
			        type: 'select',
			        defaultValue: 'united_states',
			        templateOptions: {
			            label: 'Country',
			            required: true,
			            options: [
			              { label: 'United States (USA)', value: 'united_states' },
			              { label: 'Canada', value: 'canada' },
			            ],
			        }
				},
				{
		            type: 'input',
		            key: 'street1',
		            templateOptions: {
		              required: true,
		              label: 'Street Address 1',
		            }
				},
			    {      
		            type: 'input',
		            key: 'street2',
		            templateOptions: {
		              label: 'Street Address 2',
		            }
			    },
			    {      
			          type: 'input',
			          key: 'zip',
			          hideExpression: (model) => this.model.country != 'united_states',
			          templateOptions: {
			            required: true,
			            type: 'number',
			            label: 'ZIP Code (+ 4)',
			            maxLength: 5,
			            min: 0,
			            pattern: '\\d{5}',
			          }
			    },
			    {      
			          type: 'input',
			          key: 'postal',
			          hideExpression: (model) => this.model.country != 'canada',
			          templateOptions: {
			            required: true,
			            label: 'Postal Code',
			            maxLength: 6,
			            min: 0,
			            pattern: '\\d{5}',
			          }
			    },
			    {
			      fieldGroupClassName: 'grid-row grid-gap-1',
			      fieldGroup: [
			        {
			          className: 'tablet:grid-col-6',
			          type: 'input',
			          key: 'cityName',
			          templateOptions: {
			            required: true,
			            label: 'City',
			          },
			        },
			        {
			          className: 'tablet:grid-col-3',
			          key: 'state',
			          type: 'autocomplete',
			          defaultValue: 'None',
			          hideExpression: (model) => this.model.country != 'united_states',
			          templateOptions: {
			            label: 'State',
				        required: true,
				  	    service: this.stateService,
				  	    configuration: this.stateSettings,
				  	    model: this.stateService.model
			          }
			        },
			        {
			          className: 'grid-col-3',
			          type: 'select',
			          key: 'province',
			          hideExpression: (model) => this.model.country != 'canada',
			          templateOptions: {
			            label: 'State/Province',
			            required: true,
			            options: [
			              { id: '1', label: 'Alberta', value: 'Alberta'},
			              { id: '2', label: 'British Columbia', value: 'British Columbia'},
			              { id: '3', label: 'Manitoba', value: 'Manitoba'},
			              { id: '4', label: 'New Brunswick', value: 'New Brunswick'},
			              { id: '5', label: 'Newfoundland and Labrador', value: 'Newfoundland and Labrador'},
			              { id: '6', label: 'Nova Scotia', value: 'Nova Scotia'},
			              { id: '7', label: 'Ontario', value: 'Ontario'},
			              { id: '8', label: 'Prince Edward Island', value: 'Prince Edward Island'},
			              { id: '9', label: 'Quebec', value: 'Quebec'},
			              { id: '10', label: 'Saskatchewan', value: 'Saskatchewan'},
			            ]
			          },
			        },
			      ],
			    }
			]	
		 }
	];
}
