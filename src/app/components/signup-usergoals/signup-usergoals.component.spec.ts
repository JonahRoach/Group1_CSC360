import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUsergoalsComponent } from './signup-usergoals.component';

describe('SignupUsergoalsComponent', () => {
  let component: SignupUsergoalsComponent;
  let fixture: ComponentFixture<SignupUsergoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUsergoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUsergoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
