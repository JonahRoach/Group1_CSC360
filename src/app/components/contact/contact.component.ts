import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template:`
  <section class = "hero is-primary is-bold">
  <div class="hero-body">
  <div class = "container">
     <h1 class="Title"> Contact Us! </h1>
  </div>
  </div>
  </section>

  <section class="section">
  <div class= "container">

  <form>

  <div class = "field">
    <input type= "text" name="name" class="input" placeholder="Your Name">
  </div>

  <div class = "field">
  <input type= "email" name="email" class="input" placeholder="Your Email">
  </div>

  <div class = "field">
  <input type= "textarea" name="message" placeholder="">
  </div>

  <button type = "submit" class = "button is-danger is-large">Submit</button>

  </form>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
