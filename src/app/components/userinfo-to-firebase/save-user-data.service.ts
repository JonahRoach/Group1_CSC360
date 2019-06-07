import { Injectable } from '@angular/core';
import {UserInfo} from '../userinfo';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})

/*export class UserInfo {
  gender= "Male"
  age = 25
  hFt=  5
  hIn= 10.5;
  weight= 155;
}
*/

export class SaveUserDataService {

  uid: String;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.uid = user.uid
    })
  }

  // create new userInfo object and return it as a FB object?
  createUserInfo(): AngularFireObject<UserInfo>{
    const infoDefault = new UserInfo()
    const userKey = this.db.list("/userinfo").push(infoDefault).key
    return this.db.object("/userinfo" + userKey)
  }

  // for edit user info page
  updateUserInfo(info: AngularFireObject<UserInfo>, data: any){
    return info.update(data)
  }
}
