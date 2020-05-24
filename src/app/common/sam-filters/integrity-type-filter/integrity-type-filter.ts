import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';

@Injectable()
export class IntegrityTypeFilter implements SDSAutocompleteServiceInterface {
	
   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
    private data = [
        { 'label': 'Administrative Agreement' },
        { 'label': 'DoD Determination of Contractor Fault' },
        { 'label': 'Non-Responsibility Determination' },
        { 'label': 'Subcontractor Payment Issues' },
        { 'label': 'Termination for Cause' },
        { 'label': 'Termination for Default' },
        { 'label': 'Termination for Material Failure to Comply' }
    ];

   	constructor() {
		this.settings.id = 'termination_type';
		this.settings.primaryKeyField = 'label';
		this.settings.primaryTextField = 'label';
		this.settings.secondaryTextField = null;
		this.settings.labelText = 'label';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = 'Select...';
		this.settings.debounceTime = 100;
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => element.label.toLowerCase().indexOf(searchValue.toLowerCase()) >=0) : this.data;
        return of({
        	items: result,
        	totalItems: result.length
        });
    }
}
