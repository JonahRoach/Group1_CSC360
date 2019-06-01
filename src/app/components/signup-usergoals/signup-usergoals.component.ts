import { Component, OnInit } from '@angular/core';
import {UserGoals} from '../usergoals';

@Component({
  selector: 'app-signup-usergoals',
  templateUrl: './signup-usergoals.component.html',
  styleUrls: ['./signup-usergoals.component.css']
})
export class SignupUsergoalsComponent implements OnInit {

  goalTypes = ['Lose', 'Maintain', 'Gain'];
  activityTypes = ['Sedentary','Lightly Active', 'Moderately Active', 'Very Activity', 'Extremely Active'];

  
  usergoals: UserGoals = {
    goaltype: "Lose",
    activity: "Sedentary",
    goal: 0,
    changeperweek: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
