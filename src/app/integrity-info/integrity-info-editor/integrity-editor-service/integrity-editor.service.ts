import { Injectable } from '@angular/core';

import { SdsFormlyEditorService } from '../../../components/public-apis';

/**
 * This is my service stub
 */
@Injectable()
export class IntegrityEditorService implements SdsFormlyEditorService {

  constructor() { }

  save(model:any): boolean {
	console.log(`%cLog: saving...` +   JSON.stringify(model), 'color: blue; font-weight: bold');
  	return true;
  }

}
