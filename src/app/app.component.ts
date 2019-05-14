import { Component } from '@angular/core';
import { getPluralCategory } from '@angular/common/src/i18n/localization';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';

interface Workout {
  name: string;
  category: string;
  duration: string;
}

const WORKOUTS: Workout[] = [
  {
    name: 'Squats',
    //flag: 'f/f3/Flag_of_Russia.svg',
    category: 'Strength',
    duration: '3 set 8 reps'
  },
  {
    name: 'Leg Extention',
    category: 'Strength',
    duration: '2 set 10 reps'
  },
  {
    name: 'Leg Curl',
    category: 'Strength',
    duration: '2 set 10 reps'
  },
  {
    name: 'Bike',
    category: 'Cardio',
    duration: '30 minutes'
  }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  addHero() {
    if(this.nam != "" || this.cat != 'Category' || this.dur != "") {
      WORKOUTS.push({name:this.nam, category:this.cat, duration:this.dur});
      this.nam = "";
      this.dur = "";
      this.cat = "Category";
    }
  }

  title = 'w-planner';
  currentJustify = 'justified';
  workoutsM = WORKOUTS;
  nam: string;
  dur:string;
  cat: string = "Category";
}
