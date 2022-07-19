import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './core/home-component/home-component.component';
import { PollComponentComponent } from './core/poll-component/poll-component.component';

const routes: Routes = [
  { path: 'poll', component: PollComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'**', redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
