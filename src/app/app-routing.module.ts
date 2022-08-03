/*<<<<<<< Updated upstream
///<<<<<<< HEAD
///=======
//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

// Aceasta componenta este inutila?
//const routes: Routes = [

  
//];
=======*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VoteComponent } from './vote/vote.component';
// Aceasta componenta este inutila?
const routes: Routes = [

  {
    path: 'vote',
    component: VoteComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: "/login"
  }
];


//@NgModule({
 // imports: [RouterModule.forRoot(routes)],
 // exports: [RouterModule]
//})
///export class AppRoutingModule { }
///>>>>>>> 21b2a30476df4ef0305c31a5a9a97f824b250943
