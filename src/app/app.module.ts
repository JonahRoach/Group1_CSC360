import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
//Environment
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodComponent } from './food/food.component';
import { WorkoutComponent } from './workout/workout.component';
import { BmiComponent } from './bmi/bmi.component';
import { SignupUserdataComponent } from './signup-userdata/signup-userdata.component';
import { UpdateUserdataComponent } from './update-userdata/update-userdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    HomepageComponent,
    DashboardComponent,
    FoodComponent,
    WorkoutComponent,
    BmiComponent,
    SignupUserdataComponent,
    UpdateUserdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
