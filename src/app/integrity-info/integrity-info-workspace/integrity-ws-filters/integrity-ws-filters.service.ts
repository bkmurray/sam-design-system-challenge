import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { IntegrityTypeFilter } from '../../../common/public-apis';
import { AwardeeFilterService } from '../../integrity-filters/awardees-filter/awardees-filter.service';

@Injectable()
export class IntegrityWsFiltersService {

  constructor(private recordTypeFilter: IntegrityTypeFilter, private awardeeNameService: AwardeeFilterService) { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
     {
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    type: 'input',
	    templateOptions: { 
	      label: 'Keyword',
	    }
	  },	 
	  {
	  	key: 'awardee',
	  	wrappers: ['accordionwrapper'],
	  	templateOptions: { label: 'Awardee'},
	  	fieldGroup: [
	  		{
	  			key: 'name',
	  			type: 'autocomplete',
	  			templateOptions: {
	  				label: 'Awardee Name',
	  				service: this.awardeeNameService,
	  				configuration: this.awardeeNameService.settings,
	  				model: this.awardeeNameService.model
	  			}
	  		}
	  	]
	  },
	  {
	  	key: 'recordType',
	  	wrappers: ['accordionwrapper'],
	  	type: 'autocomplete',
	  	templateOptions: { 
	  		label: 'Record Type',
	  		service: this.recordTypeFilter,
	  		configuration: this.recordTypeFilter.settings,
	  		model: this.recordTypeFilter.model
	  	}
	  },
	  {
	    key: 'terminationType',
	    wrappers: ['accordionwrapper'],
	    type: 'multicheckbox',
	    templateOptions: { 
	        label: 'Termination Type',
	        options: [
	            {
	              label: 'Complete',
	              value: 'Complete'
	            },
	            {
	              label: 'Partial',
	              value: 'Partial'
	            },
	            {
	              label: 'N/A',
	              value: 'NA'
	            }
	          ] 
	      }
	  },
	  {
	      key: 'expiration',
	      wrappers: ['accordionwrapper'],
	      type: 'radio',
	      templateOptions: {
	        label: 'Expiration Date',
	        options: [
	          { label: '30 Days', value: '30' },
	          { label: '60 Days', value: '60' },
	          { label: '90 Days', value: '90' },
	        ]
	      }
	   }
	];
}
