import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';

import { BaseAwardeeFilterService, EntityIDType } from './base-awardee-filter.service';
import { awardeeData } from './awardee.data';

@Injectable()
export class AwardeeFilterService implements SDSAutocompleteServiceInterface {

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
   	public data;

   	constructor(private service: BaseAwardeeFilterService) {
		this.settings.id = 'awardee';
		this.settings.primaryKeyField = 'DUNS';
		this.settings.primaryTextField = 'AWARDEE';
		this.settings.secondaryTextField = 'DUNS';
		this.settings.labelText = 'Awardee Name';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = '';
		this.settings.debounceTime = 100;
		this.data = this.initData();
	}

	initData() {
		return awardeeData.sort((a, b) => { 
           return (a.AWARDEE > b.AWARDEE) ? 1 : -1; 
		});
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        return this.service.getDataByText(EntityIDType.Name, currentItems, searchValue);
    }
}
