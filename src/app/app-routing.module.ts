import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { ExeinfoComponent } from './exeinfo/exeinfo.component';

const routes: Routes = [
    { path: '', redirectTo: '/workout', pathMatch: 'full' },
	{ path: 'workout', component: WorkoutComponent },
	{ path: 'exeinfo/:name', component: ExeinfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
