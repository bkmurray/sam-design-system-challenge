import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { downloadData } from './download.data';

@Injectable()
export class DownloadService {

  constructor() { }
  
    getData(search: SearchParameters): Observable<SearchResult> {

        let records = downloadData;

        /* Return slice */
        const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        const end = start + search.page.pageSize;
        return of({
            items: records.slice(start, end),
            totalItems: records.length
        });
    }
}
