import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Userdata } from '../shared/userdata';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserDataCRUDService {

  uid: any;
  userinfoKey: any;

  userdataListRef: AngularFireList<any>;
  userdataObjRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(async user => {
      try{
        if(user){
          this.uid= await user.uid
          this.userdataListRef = await this.getUserdataList()
          this.getUserdata()
        }  
        console.log("Done saving everything: "+this.uid)
      }
      // necessary for async call
      catch{}
    })
   }
  // Create UserData for User
  addUserData(data: Userdata){
    this.userdataListRef.push({
      age: data.age,
      weight: data.weight,
      hFt: data.hFt,
      hIn: data.hIn,
      gender: data.gender,

      goal: data.goal,
      activity: data.activity,
      goalweight: data.goalweight,
      change: data.change,
    })
    this.getUserdata()
  }

  // Single Userdata Object
  getUserdata(){
    this.userdataListRef.valueChanges().subscribe(items => {
      this.userdataObjRef = items[0];
    });
  }

  getUserdataList(){
    this.userdataListRef = this.db.list("/userdata/"+this.uid)
    return this.userdataListRef
  }

  // Update Userdata Object
  updateUserdata(data: Userdata){
    this.userdataObjRef.update({
      age: data.age,
      weight: data.weight,
      hFt: data.hFt,
      hIn: data.hIn,
      gender: data.gender,

      goal: data.goal,
      activity: data.activity,
      goalweight: data.goalweight,
      change: data.change,
    })
  }

  // Delete Userdata
  deleteUserdata(){
    //this.userdataObjRef = this.db.object('userdata/'+this.uid)
    this.userdataListRef.remove();
  }

}
