import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUserdataComponent } from './signup-userdata.component';

describe('SignupUserdataComponent', () => {
  let component: SignupUserdataComponent;
  let fixture: ComponentFixture<SignupUserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUserdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
