import{ NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { VoteComponent } from './vote/vote.component';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
/*<<<<<<< Updated upstream*/
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { TalComponent } from './tal/tal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

const routes:Routes=[
  {
    path: 'vote/:id/:pid',
    component: VoteComponent,
  },
  {
    path: 'dashboard/:id',
    component:TalComponent},
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

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    LoginComponent, 
    DialogComponent,
    TalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule, 
    LayoutModule,
     MatToolbarModule, MatButtonModule,
     MatSidenavModule, MatIconModule, MatListModule, 
     MatGridListModule, MatInputModule, MatMenuModule,
    ReactiveFormsModule,FormsModule,MatFormFieldModule,
    HttpClientModule,MatNativeDateModule,MatTableModule,
    MatDialogModule,MatPaginatorModule,MatSortModule,
MatDatepickerModule
  ],
  exports :[VoteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}


