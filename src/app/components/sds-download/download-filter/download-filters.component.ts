import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-download-filters',
  templateUrl: './download-filters.component.html',
  styleUrls: ['./download-filters.component.scss']
})
export class DownloadFiltersComponent implements OnInit {

  public filterChange$ = new BehaviorSubject<object>(null);
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      templateOptions: { label: 'Search by Keyword' },
      fieldGroup: [{
        key: 'keywordSearch',
        id: 'key',
        type: 'autocomplete',
        templateOptions: {
          label: 'Keyword',
          placeholder: '',
          inputType: 'text',
          isTagModeEnabled: true,
          change: (field, $event) => {
            this.applyFilters(field);
          }
        },
        lifecycle: {
          onInit: (form: FormGroup, field: FormlyFieldConfig) => {
          }
        }
      }],
      lifecycle:{
      }
    },
    {
      key: 'status',
      templateOptions: { label: 'Status' },
      fieldGroup: [{
        key: 'status',
        id: 'status',
        type: 'multicheckbox',
        templateOptions: {
          label: 'Status',
          labelClass: 'usa-sr-only',
          options: [
            {
              key: 'Available Only',
              value: 'Active'
            }
          ]
        },
        lifecycle: {
          onInit: (form: FormGroup, field: FormlyFieldConfig) => {
          }
        }
      }],
      lifecycle:{
      }
    },
    {
      key: 'searchType',
      templateOptions: { label: 'Search by Type' },
      fieldGroup: [{
        key: 'typeSearch',
        id: 'type',
        type: 'autocomplete',
        templateOptions: {
          label: 'Keyword',
          placeholder: '',
          inputType: 'text',
          isTagModeEnabled: true,
          change: (field, $event) => {
            this.applyFilters(field);
          }
        },
        lifecycle: {
          onInit: (form: FormGroup, field: FormlyFieldConfig) => {
          }
        }
      }],
      lifecycle:{
      }
    },
    {
      key: 'domain',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Domain' },
      fieldGroup: [{
        key: 'domain',
        id: 'domain',
        type: 'multicheckbox',
        templateOptions: {
          label: 'Domain',
          labelClass: 'usa-sr-only',
          options: [
            {
              key: 'Select All',
              value: ''
            },
            {
              key: 'Assistance Listings',
              value: 'Assistance Listings'
            },
            {
              key: 'Contract Opportunities',
              value: 'Contract Opportunities'
            },
            {
              key: 'Contract Data',
              value: 'Contract Data'
            },
            {
              key: 'Entity Information',
              value: 'Entity Information'
            },
            {
              key: 'Federal Hierarchy',
              value: 'Federal Hierarchy'
            },
            {
              key: 'Wage Determination',
              value: 'Wage Determination'
            }
          ]
        },
        lifecycle: {
          onInit: (form: FormGroup, field: FormlyFieldConfig) => {
          }
        }
      }],
      lifecycle:{
      }
    },
    {
      key: 'ExpireDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expire Date' },
      fieldGroup: [
        {
          key: 'expireDateFrom',
          id: 'exp',
          type: 'input',
          templateOptions: {
            label: 'From',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          },
          lifecycle: {
          }
        },
        {
          key: 'expireDateTo',
          type: 'input',
          templateOptions: {
            label: 'To',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          },
          lifecycle: {
          }
        }
      ],
      lifecycle:{
      }
    },
    {
      key: 'CreateDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Create Date' },
      fieldGroup: [
        {
          key: 'createDateFrom',
          id: 'create',
          type: 'input',
          templateOptions: {
            label: 'From',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          },
          lifecycle: {
          }
        },
        {
          key: 'createDateTo',
          type: 'input',
          templateOptions: {
            label: 'To',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          },
          lifecycle: {
          }
        }
      ],
      lifecycle:{
      }
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  clearFilters(){
  }

  applyFilters(field: any){

  }
}
