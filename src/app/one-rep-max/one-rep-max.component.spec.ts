import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRepMaxComponent } from './one-rep-max.component';

describe('OneRepMaxComponent', () => {
  let component: OneRepMaxComponent;
  let fixture: ComponentFixture<OneRepMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneRepMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRepMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
