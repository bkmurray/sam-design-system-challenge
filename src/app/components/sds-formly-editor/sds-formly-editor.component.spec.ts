import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsFormlyEditorComponent } from './sds-formly-editor.component';

describe('SdsFormlyEditorComponent', () => {
  let component: SdsFormlyEditorComponent;
  let fixture: ComponentFixture<SdsFormlyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsFormlyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFormlyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
