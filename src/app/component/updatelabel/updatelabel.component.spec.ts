import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelabelComponent } from './updatelabel.component';

describe('UpdatelabelComponent', () => {
  let component: UpdatelabelComponent;
  let fixture: ComponentFixture<UpdatelabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
