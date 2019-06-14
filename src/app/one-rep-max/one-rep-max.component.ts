import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-rep-max',
  templateUrl: './one-rep-max.component.html',
  styleUrls: ['./one-rep-max.component.css']
})
export class OneRepMaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calculate(weight:number, rep:number){
    this.total = weight * (1 + rep/30);
  }
  total:number = 0;

}
