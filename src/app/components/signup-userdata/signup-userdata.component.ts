import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../userinfo';
import { SaveUserDataService } from '../userinfo-to-firebase/save-user-data.service';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup-userdata',
  templateUrl: './signup-userdata.component.html',
  styleUrls: ['./signup-userdata.component.css']
})
export class SignupUserdataComponent implements OnInit {
  //'Things that might make people mad' for 500 please
  genders = ['Male', 'Female'];

  newuserinfo: any;
  infoForm: FormGroup;

  userinfo: UserInfo = {
    gender: "Male",
    age: 25,
    hFt: 5,
    hIn: 10.5,
    weight: 155
  };

  constructor(private infoService: SaveUserDataService, private fb: FormBuilder) { }

  newUserInfo(){
    this.newuserinfo = this.infoService.createUserInfo()
    this.buildForm()
  }

  saveUserInfoChanges() {
    if (this.infoForm.status != 'VALID') {
      console.log('form is not valid, cannot save to database')
      return
    }

    const data = this.infoForm.value
    this.infoService.updateUserInfo(this.newuserinfo, data)
  }

  private buildForm() {
    this.infoForm = this.fb.group({
      gender:    ['', Validators.required ],
      age:  ['', Validators.required ],
      hFt:    ['', Validators.required ],
      hIn:    ['', Validators.required ],
      weight:    ['', Validators.required ]
    });
    this.newuserinfo.subscribe(newuserinfo => {
      this.infoForm.patchValue(newuserinfo)
    }) 
  }


  ngOnInit() {
  }

}
