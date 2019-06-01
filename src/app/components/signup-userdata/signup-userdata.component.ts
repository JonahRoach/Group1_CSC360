import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../userinfo';

@Component({
  selector: 'app-signup-userdata',
  templateUrl: './signup-userdata.component.html',
  styleUrls: ['./signup-userdata.component.css']
})
export class SignupUserdataComponent implements OnInit {
  //'Things that might make people mad' for 500
  genders = ['Male', 'Female'];

  UserP1: UserInfo;

  userinfo: UserInfo = {
    name: "John",
    gender: "Male",
    age: 25,
    hFt: 5,
    hIn: 10.5,
    weight: 152
  };

  constructor() { }

  ngOnInit() {
  }

  save(userp1: UserInfo): void {
    this.UserP1 = userp1;
  }

}
