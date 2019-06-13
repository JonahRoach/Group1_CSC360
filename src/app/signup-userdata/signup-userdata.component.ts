import { Component, OnInit } from '@angular/core';
import {Userdata} from '../shared/userdata';
import { UserDataCRUDService } from '../shared/user-data-crud.service';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup-userdata',
  templateUrl: './signup-userdata.component.html',
  styleUrls: ['./signup-userdata.component.css']
})
export class SignupUserdataComponent implements OnInit {
  //'Things that might make people mad' for 500 please
  genders = ['Male', 'Female'];
  goalTypes = ['Lose', 'Maintain', 'Gain'];
  activityTypes = ['Sedentary','Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active'];

  //for disabling change in weight per week box
  goals: string;

  public userinfoForm: FormGroup;

  constructor(public crudApi: UserDataCRUDService, 
              public fb: FormBuilder) {}

  ngOnInit() {
    this.showUserinfoForm();
  }

  private showUserinfoForm() {
    this.userinfoForm = this.fb.group({
      gender:    ['',  [Validators.required] ],
      age:  ['', 
            [Validators.required,
            Validators.min(18),
            ]],
      hFt:    ['', 
            [Validators.required,
            Validators.min(3),
            Validators.max(8) ]],
      hIn:    ['', 
            [Validators.required,
            Validators.min(0),
            Validators.max(11) ]],
      weight: ['', 
            [Validators.required,
            Validators.min(75),
            Validators.max(500) ]],

      goal:   ['', [Validators.required]],
      activity: ['', [Validators.required]],
      goalweight: ['', [Validators.required,
                  Validators.min(75),
                  Validators.max(500) ]],
      change: ['' ,[Validators.min(0),
                  Validators.max(2)]]
    });
  }

  get gender(){
    return this.userinfoForm.get('gender')
  }
  get age(){
    return this.userinfoForm.get('age')
  }
  get weight(){
    return this.userinfoForm.get('weight')
  }
  get hFt(){
    return this.userinfoForm.get('hFt')
  }
  get hIn(){
    return this.userinfoForm.get('hIn')
  }
  get goal(){
    return this.userinfoForm.get('goal')
  }
  get activity(){
    return this.userinfoForm.get('activity')
  }
  get goalweight(){
    return this.userinfoForm.get('goalweight')
  }
  get change(){
    return this.userinfoForm.get('change')
  }
  
  //reset form
  resetForm(){
    this.userinfoForm.reset();
  }
  
  submitUserinfo(){
    this.crudApi.addUserData(this.userinfoForm.value);
    this.resetForm();
  }

}
