import { Component, OnInit } from '@angular/core';
import {Userdata} from '../shared/userdata';
import { UserDataCRUDService } from '../shared/user-data-crud.service';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {



  // FOR CURRENT DATA
  height: number;
  weight: number;
  currentbmi: string;
  dataobj: any;
  showCurrent = false; // mostly for waiting for the UID to load in the service

  // FOR USER INPUT
  newHeight: number;
  newbmi: string;
  showNew = false;
  
  public bmiform: FormGroup;

  constructor(public crudApi: UserDataCRUDService, public fb: FormBuilder) {
  }

  ngOnInit() {
    this.showBMIForm()
  }
  private showBMIForm() {
    this.bmiform = this.fb.group({
      newhFt:    ['', 
            [Validators.required,
            Validators.min(3),
            Validators.max(8) ]],
      newhIn:    ['', 
            [Validators.required,
            Validators.min(0),
            Validators.max(11) ]],
      newWeight: ['', 
            [Validators.required,
            Validators.min(75),
            Validators.max(500) ]]
    });
  }

  get newWeight(){
    return this.bmiform.get('newWeight')
  }
  get newhFt(){
    return this.bmiform.get('newhFt')
  }
  get newhIn(){
    return this.bmiform.get('newhIn')
  }

  calculateCurrentBMI(){
    this.dataobj=this.crudApi.userdataObjRef
    this.height = (this.dataobj.hFt * 12)+this.dataobj.hIn
    this.weight = this.dataobj.weight
    this.currentbmi = this.bmiCalc(this.height, this.weight);
    this.showCurrent=true;
  }

  calculateNewBMI(){

    this.newHeight = ((this.bmiform.get('newhFt').value) * 12)+ this.bmiform.get('newhIn').value
    this.newbmi = this.bmiCalc(this.newHeight, this.bmiform.get('newWeight').value)
    this.bmiform.reset();
    this.showNew=true;
  }

  bmiCalc(height: number, weight: number) : string{
    // Formula 703 x (weight (lbs) / [height (in)]squared)
    return (703 * (weight / (height*height))).toFixed(1)
  }

}
