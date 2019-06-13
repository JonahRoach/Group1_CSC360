import { Injectable } from '@angular/core';
import { of as observableOf, observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map, first } from 'rxjs/operators'
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  uid = this.afAuth.authState.pipe(
    map(authState => {
      if(!authState){
        return null;
      } else {
        return authState.uid;
      }
    })
  );
  isAdmin = observableOf(true);
  constructor(private afAuth: AngularFireAuth) { 

  }
  googleLogin(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  isLoggedIn(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  emailRegister(email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  emailLogin(e: string, p:string){
    this.afAuth.auth.signInWithEmailAndPassword(e, p).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      this.err = "Please check username or password input";
    });
  }
  // set(e:string, p:string){
  //   this.em = e;
  //   this.pw = p;
  // }
  // em: string = "a";
  // pw: string = "p";
  // ems: string;
  // pws: string;
  err:string = "";
}


