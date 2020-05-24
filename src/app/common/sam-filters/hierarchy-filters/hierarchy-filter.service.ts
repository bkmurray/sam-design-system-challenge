import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';

import { subtierDataByRole } from './hierarchy.data';

@Injectable()
export class HierarchyFilterService implements SDSAutocompleteServiceInterface {

   	public data;

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

   	constructor() {
		this.settings.id = 'awardeeName';
		this.settings.primaryKeyField = 'subtier';
		this.settings.primaryTextField = 'subtier';
		this.settings.secondaryTextField = 'agencyCode';
		this.settings.labelText = 'Agency';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = 'Enter an agency name or code';
		this.settings.debounceTime = 100;
		this.data = this.initData();
	}

	initData() {
		return subtierDataByRole.sort((a, b) => { 
           return (a.subtier > b.subtier) ? 1 : -1; 
		});
	}

	match(record, searchValue) {
	    if(record.subtier && record.subtier.toLowerCase().startsWith(searchValue.toLowerCase())) {
	    	return true;
	    }
	    if(record.agencyCode && record.agencyCode.startWith(searchValue)) {
	    	return true;
	    }
	    return false;
	}

    getDataByText(currentrecords: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => this.match(element, searchValue)) : this.data;
        return of({
        	items: result.slice(0 + currentrecords, ((30 + currentrecords) < result.length) ? 30 + currentrecords : result.length),
        	totalItems: result.length
        });
    }
}