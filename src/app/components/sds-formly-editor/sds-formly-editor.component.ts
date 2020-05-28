import { Component, 
	OnInit, 
	AfterViewInit, 
	Input, 
	ViewChild, 
	ViewChildren, 
	ChangeDetectionStrategy,
	TemplateRef, 
	EventEmitter,
	Output,
	QueryList } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { BehaviorSubject } from 'rxjs';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

import { SdsFormlyEditorPage, SdsFormlyEditorService } from './model/sds-formly-editor.model';


/**
 *  This component manages a single page in the editor. It could be put into it's own file.
 */
@Component({
  selector: 'sds-formly-editor-page',
  templateUrl: './sds-formly-editor-page.component.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsFormlyEditorPageComponent implements AfterViewInit {

  @Input() form: FormGroup;

  @Input() page: SdsFormlyEditorPage;

  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();

  onModelChange(change: any) {
  	 this.modelChange.emit(change);
  }

  @ViewChild(TemplateRef, {static: true}) content: TemplateRef<any>;

  constructor() {}

  ngAfterViewInit() {
  }

}

/**
 *  This is recommended to be developed into a robust common component.  I looked at the CDK and Material steppers, as well as the formly 
 *  multi-step example, in creating this.  This is just a proof of concept implementation.  It supports multi-page data entry.
 */
@Component({
  selector: 'sds-formly-editor',
  templateUrl: './sds-formly-editor.component.html',
  styleUrls: ['./sds-formly-editor.component.scss']
})
export class SdsFormlyEditorComponent implements OnInit {

  @Input() service: SdsFormlyEditorService;  

  @Input() model: any;

  @Input() forms: FormArray;

  @Input() pages: SdsFormlyEditorPage[];

  @Output() modelChange = new EventEmitter<any>();

  @ViewChildren(SdsFormlyEditorPageComponent) _pages;

  editIndex: number = 0;

  currentPage: SdsFormlyEditorPageComponent = null;
  content: TemplateRef<any>;

  navigationModel: SideNavigationModel = {
    navigationLinks: []
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  hasNext() : boolean {
  	return (this.forms && (this.editIndex+1) < this.forms.length) ? true : false;
  }

  hasPrevious() : boolean {
  	return (this.forms && this.editIndex > 0) ? true : false;
  }

  next() {
      if(this.hasNext()) {
      	this.goToPage(this.editIndex+1);
      }
  }

  previous() {
     if(this.hasPrevious()) {
     	this.goToPage(this.editIndex-1);
     }
  }

  onModelChange(change: any) {
  	 this.modelChange.emit(change);
  }

  goToPage(index: number) {
  	if(this.pages && index >= 0 && index < this.pages.length) {
  		this.router.navigate([this.router.url.split('?')[0]], { queryParams: { index: this.pages[index].id } });
  	}
  }

  setPageById(pageId: string) {
     let p = this._pages.toArray();
     for(let i=0; i<p.length; i++) {
     	if(p[i].page.id == pageId) {
     		this.content = p[i].content;
     		this.currentPage = p[i].page;
     		this.editIndex = i;
     	}
     }
  }

  ngAfterViewInit() {  
    this.route.queryParams.subscribe(
      data => {
        let index = typeof data['index'] === "string" ? decodeURI(data['index']) : 'documentInfo';
        this.setPageById(index);
      });
    
  	this.goToPage(0);
  }

  ngOnInit() {

     /* Generate the side menu from the page definitions */
     for(let i = 0; i<this.pages.length; i++) {
  	  	this.navigationModel.navigationLinks.push(
  	  		{
  	  			id: this.pages[i].id,
  	  			text: this.pages[i].title,
  	  			mode: NavigationMode.INTERNAL,
  	  			route: this.router.url,
  	  			queryParams: { 
  	  				'index' : this.pages[i].id
  	  			}
  	  		}
  	  	);
  	  }
  }

}
