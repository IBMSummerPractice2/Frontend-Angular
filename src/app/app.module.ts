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
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { UserComponent } from './user/user.component';
const routes:Routes=[
  {path:'vote',
component:VoteComponent
},
{path:'dashboard',
component:DashboardComponent},
{path:'',
component:LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VoteComponent,
    LoginComponent,
    UserComponent,
    
  ],
 
  imports: [
     BrowserModule,
     RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule, 
    LayoutModule,
     MatToolbarModule, MatButtonModule,
     MatSidenavModule, MatIconModule, MatListModule, 
     MatGridListModule, MatInputModule, MatMenuModule,
    ReactiveFormsModule,FormsModule,MatFormFieldModule,HttpClientModule,

  ],
  exports :[VoteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


