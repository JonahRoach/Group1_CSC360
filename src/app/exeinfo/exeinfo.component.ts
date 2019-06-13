import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WgerService } from '../wger.service';

@Component({
  selector: 'app-exeinfo',
  templateUrl: './exeinfo.component.html',
  styleUrls: ['./exeinfo.component.css']
})
export class ExeinfoComponent implements OnInit {
  name = "";
  category;
  description;
  muscles;
  muscles_sec;
  equip;
  
  constructor(private route: ActivatedRoute,
			  private location: Location,
			  private wgerService: WgerService) {}

  ngOnInit() {
	  this.name = this.name + this.route.snapshot.paramMap.get('name');
	  console.log(name);
	  
	  for (var pNum = 3; pNum <= 8; pNum++){
		  this.wgerService.getExercise(pNum).subscribe(
			res => {
					for (var i = 0; i < res['results'].length; i++){
						if(res['results'][i].name == this.name){
							this.category = res['results'][i].category.name;
							this.description = res['results'][i].description.toString();
							this.muscles = res['results'][i].muscles;
							this.muscles_sec = res['results'][i].muscles_secondary;
							this.equip = res['results'][i].equip;
						}
					}
			});
	  }
  }
  
  goBack(): void {
	this.location.back();
  }

}
