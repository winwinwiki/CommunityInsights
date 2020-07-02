import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbatimComponent } from './verbatim.component';

describe('VerbatimComponent', () => {
  let component: VerbatimComponent;
  let fixture: ComponentFixture<VerbatimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbatimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbatimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
