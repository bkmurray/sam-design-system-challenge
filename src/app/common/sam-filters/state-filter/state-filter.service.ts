import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SDSAutocompleteServiceInterface,
		 SDSSelectedItemModel,
		 SDSHiercarchicalServiceResult
	   } from '@gsa-sam/components';

/**
 *  This is a reusable autocomplete service for U.S. States.
 */
@Injectable()
export class StateFilterService implements SDSAutocompleteServiceInterface {

   	protected data = [
			              { id: '1', label: 'Alabama', value: 'Alabama' },
			              { id: '2', label: 'Alaska', value: 'Alaska' },
			              { id: '3', label: 'Arizona', value: 'Arizona' },
			              { id: '4', label: 'Arkansas', value: 'Arkansas'},
			              { id: '5', label: 'California', value: 'California'},
			              { id: '6', label: 'Colorado', value: 'Colorado'},
			              { id: '7', label: 'Connecticut', value: 'Connecticut'},
			              { id: '8', label: 'Delaware', value: 'Delaware'},
			              { id: '9', label: 'District of Columbia', value: 'District of Columbie'},
			              { id: '10', label: 'Florida', value: 'Florida'},
			              { id: '11', label: 'Georgia', value: 'Georgia'},
			              { id: '12', label: 'Hawaii', value: 'Hawaii' },
			              { id: '13', label: 'Idaho', value: 'Idaho' },
			              { id: '14', label: 'Illinois', value: 'Illinois' },
			              { id: '15', label: 'Indiana', value: 'Indiana'},
			              { id: '16', label: 'Iowa', value: 'Iowa'},
			              { id: '17', label: 'Kansas', value: 'Kansas'},
			              { id: '18', label: 'Kentucky', value: 'Kentucky'},
			              { id: '19', label: 'Louisiana', value: 'Louisiana'},
			              { id: '20', label: 'Maine', value: 'Maine'},
			              { id: '21', label: 'Maryland', value: 'Maryland'},
			              { id: '22', label: 'Massachusetts', value: 'Massachusetts'},
			              { id: '23', label: 'Michigan', value: 'Michigan' },
			              { id: '24', label: 'Minnesota', value: 'Minnesota' },
			              { id: '25', label: 'Mississippi', value: 'Mississippi' },
			              { id: '26', label: 'Missouri', value: 'Missouri'},
			              { id: '27', label: 'Montana', value: 'Montana'},
			              { id: '28', label: 'Nebraska', value: 'Nebraska'},
			              { id: '29', label: 'Nevada', value: 'Nevada'},
			              { id: '30', label: 'New Hampshire', value: 'New Hampshire'},
			              { id: '31', label: 'New Jersey', value: 'New Jersey'},
			              { id: '32', label: 'New Mexico', value: 'New Mexico'},
			              { id: '33', label: 'New York', value: 'New York'},
			              { id: '34', label: 'North Carolina', value: 'North Carolina' },
			              { id: '35', label: 'North Dakota', value: 'North Dakota' },
			              { id: '36', label: 'Ohio', value: 'Ohio' },
			              { id: '37', label: 'Oklahoma', value: 'Oklahoma'},
			              { id: '38', label: 'Oregon', value: 'Oregon'},
			              { id: '39', label: 'Pennsylvania', value: 'Pennsylvania'},
			              { id: '40', label: 'Rhode Island', value: 'Rhode Island'},
			              { id: '41', label: 'South Carolina', value: 'South Carolina'},
			              { id: '42', label: 'South Dakota', value: 'South Dakota'},
			              { id: '43', label: 'Tennessee', value: 'Tennessee'},
			              { id: '44', label: 'Texas', value: 'Texas'},
			              { id: '45', label: 'Utah', value: 'Utah' },
			              { id: '46', label: 'Vermont', value: 'Vermont' },
			              { id: '47', label: 'Virginia', value: 'Virginia' },
			              { id: '48', label: 'Washington', value: 'Washington'},
			              { id: '49', label: 'West Virginia', value: 'West Virginia'},
			              { id: '50', label: 'Wisconsin', value: 'Wisconsin'},
			              { id: '51', label: 'Wyoming', value: 'Wyoming'},
			            ];

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();

   	constructor() { }

	match(element, searchValue) {
	    if(element.value && element.value.toLowerCase().startsWith(searchValue.toLowerCase())) {
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