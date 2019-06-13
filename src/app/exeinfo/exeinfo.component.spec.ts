import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeinfoComponent } from './exeinfo.component';

describe('ExeinfoComponent', () => {
  let component: ExeinfoComponent;
  let fixture: ComponentFixture<ExeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
