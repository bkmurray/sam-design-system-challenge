import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';

import { BaseAwardeeFilterService, EntityIDType } from './base-awardee-filter.service';

@Injectable()
export class AwardeeCageFilterService implements SDSAutocompleteServiceInterface {

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

   	constructor(private service: BaseAwardeeFilterService) {
		this.settings.id = 'awardeeCAGE';
		this.settings.primaryKeyField = 'AWARDEE';
		this.settings.primaryTextField = 'AWARDEE';
		this.settings.secondaryTextField = 'CAGE';
		this.settings.labelText = 'Awardee CAGE';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = '';
		this.settings.debounceTime = 100;
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        return this.service.getDataByText(EntityIDType.CAGE, currentItems, searchValue);
    }
}

