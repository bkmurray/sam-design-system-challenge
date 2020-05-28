
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface SdsFormlyEditorPage {
    id: string;
    title: string;
    instruction: string;
    fields: FormlyFieldConfig[];
}

export interface SdsFormlyEditorService {
	save(model: any): boolean;
}