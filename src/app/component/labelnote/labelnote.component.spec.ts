import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelnoteComponent } from './labelnote.component';

describe('LabelnoteComponent', () => {
  let component: LabelnoteComponent;
  let fixture: ComponentFixture<LabelnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
