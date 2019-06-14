import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExeinfoComponent } from './exeinfo/exeinfo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FoodComponent } from './food/food.component';
import { WorkoutComponent } from './workout/workout.component';
import { BmiComponent } from './bmi/bmi.component';
import { SignupUserdataComponent } from './signup-userdata/signup-userdata.component';
import { UpdateUserdataComponent } from './update-userdata/update-userdata.component';
import { ProfileComponent } from './profile/profile.component';
import { OneRepMaxComponent } from './one-rep-max/one-rep-max.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'one-rep-max',
    component: OneRepMaxComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'food',
    component: FoodComponent,
  },
  {
    path: 'workout',
    component: WorkoutComponent,
  },
  {
    path: 'bmi',
    component: BmiComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'signup-step2',
    component: SignupUserdataComponent,
  },
  {
    path: 'update-userdata',
    component: UpdateUserdataComponent,
  },
  { path: 'exeinfo/:name', 
    component: ExeinfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
