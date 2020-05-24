import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { awardeeData } from './awardee.data';
import { SDSHiercarchicalServiceResult } from '@gsa-sam/components';

export enum EntityIDType {
  Name,
  UEIDUNS,
  UEISAM,
  CAGE
}

@Injectable()
export class BaseAwardeeFilterService {

   	public data;

   	constructor() {
		this.data = this.initData();
	}

	initData() {
		return awardeeData.sort((a, b) => { 
           return (a.AWARDEE > b.AWARDEE) ? 1 : -1; 
		});
	}

	match(type: EntityIDType, record, searchValue) {
	    if(type == EntityIDType.UEIDUNS && record.DUNS && record.AWARDEE.toLowerCase().startsWith(searchValue.toLowerCase())) {
	      return true;
	    }
	    if(type == EntityIDType.CAGE && record.CAGE && record.CAGE.toLowerCase().startsWith(searchValue.toLowerCase())) {
	      return true;
	    }
	    if(type == EntityIDType.Name && record.AWARDEE && record.AWARDEE.toLowerCase().startsWith(searchValue.toLowerCase())) {
	      return true;
	    }
	    return false;
	}

    getDataByText(type: EntityIDType, currentrecords: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => this.match(type, element, searchValue)) : this.data;
        return of({
        	items: result.slice(0 + currentrecords, ((30 + currentrecords) < result.length) ? 30 + currentrecords : result.length),
        	totalItems: result.length
        });
    }
}