import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotedisplayComponent } from './notedisplay.component';

describe('NotedisplayComponent', () => {
  let component: NotedisplayComponent;
  let fixture: ComponentFixture<NotedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
