import { Component, OnInit } from '@angular/core';
import { WgerService } from '../wger.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  muscle;
  Fexercises = [];
  Bexercises = [];
  FimgString;
  BimgString;

  constructor(private wgerService: WgerService) { }

  ngOnInit(): void {
	  this.wgerService.get("muscle").subscribe(
		res => {
			this.muscle = res['results'];
		}
	  );
  }
  
  FSearch(id): void{
	  this.FimgString = "https://wger.de/static/images/muscles/main/muscle-" + id.toString() +".svg";
	  this.Fexercises = [];
	  
	  for (var pNum = 3; pNum <= 8; pNum++){
		  this.wgerService.getExercise(pNum).subscribe(
			res => {
					for (var i = 0; i < res['results'].length; i++){
						if(res['results'][i].muscles.length != 0){
							for (var i1 = 0; i1 < res['results'][i].muscles.length; i1++){
								if (res['results'][i].muscles[i1].id == id){
									this.Fexercises.push(res['results'][i].name);
									this.Fexercises = this.Fexercises.filter((el, i, a) => i === a.indexOf(el));
								}
							}
						}
					}
			});
	  }
  }
  
  BSearch(id): void{
	  this.BimgString = "https://wger.de/static/images/muscles/main/muscle-" + id.toString() +".svg";
	  
	  this.Bexercises = [];
	  
	  for (var pNum = 3; pNum <= 8; pNum++){
		  this.wgerService.getExercise(pNum).subscribe(
			res => {
					for (var i = 0; i < res['results'].length; i++){
						if(res['results'][i].muscles.length != 0){
							for (var i1 = 0; i1 < res['results'][i].muscles.length; i1++){
								if (res['results'][i].muscles[i1].id == id){
									this.Bexercises.push(res['results'][i].name);
									this.Bexercises = this.Bexercises.filter((el, i, a) => i === a.indexOf(el));
								}
							}
						}
					}
			});
	  }
  }
}
