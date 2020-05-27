import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import {
  IntegrityTypeFilter,
  AwardeeNameFilterService,
  AwardeeCageFilterService,
  AwardeeUeidunsFilterService,
  HierarchyFilterService,
} from '../../../common/public-apis';

@Injectable()
export class IntegrityWsFiltersService {
  constructor(
    private recordTypeFilter: IntegrityTypeFilter,
    private awardeeNameService: AwardeeNameFilterService,
    private awardeeUeidunsService: AwardeeUeidunsFilterService,
    private awardeeCageService: AwardeeCageFilterService,
    private hierarchyService: HierarchyFilterService
  ) {}

  public model = {};

  public filters: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      type: 'input',
      templateOptions: {
        label: 'Keyword',
        group: 'panel',
        className: 'sds-accordion__title'
      },
    },
    {
      key: 'agency',
      type: 'autocomplete',
      templateOptions: {
        label: 'Federal Hierarchy',
        service: this.hierarchyService,
        configuration: this.hierarchyService.settings,
        model: this.hierarchyService.model,
        group: 'panel',
      },
    },
    {
      key: 'awardee',
      templateOptions: { label: 'Awardee', group: 'accordion' },
      fieldGroup: [
        {
          key: 'name',
          type: 'autocomplete',
          templateOptions: {
            label: 'Awardee Name',
            service: this.awardeeNameService,
            configuration: this.awardeeNameService.settings,
            model: this.awardeeNameService.model,
          },
        },
        {
          key: 'ueiduns',
          type: 'autocomplete',
          templateOptions: {
            label: 'Unique Entity ID',
            service: this.awardeeUeidunsService,
            configuration: this.awardeeUeidunsService.settings,
            model: this.awardeeUeidunsService.model,
          },
        },
        {
          key: 'cage',
          type: 'autocomplete',
          templateOptions: {
            label: 'CAGE / NCAGE',
            service: this.awardeeCageService,
            configuration: this.awardeeCageService.settings,
            model: this.awardeeCageService.model,
          },
        },
      ],
    },
    {
      key: 'recordType',
      type: 'autocomplete',
      templateOptions: {
        label: 'Record Type',
        service: this.recordTypeFilter,
        configuration: this.recordTypeFilter.settings,
        model: this.recordTypeFilter.model,
        group: 'accordion',
      },
    },
    {
      key: 'terminationType',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Termination Type',
        group: 'accordion',
        options: [
          {
            label: 'Complete',
            value: 'Complete',
          },
          {
            label: 'Partial',
            value: 'Partial',
          },
          {
            label: 'N/A',
            value: 'NA',
          },
        ],
      },
    },
    {
      key: 'expiration',
      type: 'radio',
      templateOptions: {
        label: 'Expiration Date',
        group: 'accordion',
        options: [
          { label: '30 Days', value: '30' },
          { label: '60 Days', value: '60' },
          { label: '90 Days', value: '90' },
        ],
      },
    },
  ];
}
