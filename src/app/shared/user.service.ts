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
  facebookLogin(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  twitterLogin(){
    this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }
  gitHubLogin(){
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  isLoggedIn(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}

