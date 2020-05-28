import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityInfoEditorComponent } from './integrity-info-editor.component';

describe('IntegrityInfoEditorComponent', () => {
  let component: IntegrityInfoEditorComponent;
  let fixture: ComponentFixture<IntegrityInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrityInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
