import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { $ } from 'protractor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var firebaseConfig = {
        apiKey: "AIzaSyCmGl-zGefcQ-2aUgz6j3-zqM44mO_Eo5E",
        authDomain: "workoutapp-d5252.firebaseapp.com",
        databaseURL: "https://workoutapp-d5252.firebaseio.com",
        projectId: "workoutapp-d5252",
        storageBucket: "workoutapp-d5252.appspot.com",
        messagingSenderId: "786364091174",
        appId: "1:786364091174:web:e1b38c6363166427"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  //Reference DB
  
  var messagesRef = firebase.database().ref('messages');
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  //console.log(getInputVal('contactForm'));
    // let form = document.getElementById("contactForm");
    // console.log(form);
  function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    //console.log(name);
    
    saveMessage(name,email,subject,message);
    //console.log("got here");
    resetForm(name, email, subject, message);
  
    //console.log("success");
    //Alert user the message has been sent
  }

  function getInputVal(id){
    return (<HTMLInputElement>document.getElementById(id)).value;
  }

  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      subject: subject,
      messages: message
    })
  }

  function resetForm(name, email, subject, message){
    (<HTMLInputElement>document.getElementById('name')).value = " ";
    (<HTMLInputElement>document.getElementById('email')).value = " ";
    (<HTMLInputElement>document.getElementById('subject')).value = " ";
    (<HTMLInputElement>document.getElementById('message')).value = " ";
  }
}

}

