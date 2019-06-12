import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FoodComponent } from './food/food.component';
import { WorkoutComponent } from './workout/workout.component';
import { BmiComponent } from './bmi/bmi.component';
import { SignupUserdataComponent } from './signup-userdata/signup-userdata.component';
import { UpdateUserdataComponent } from './update-userdata/update-userdata.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
