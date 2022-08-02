import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm!: FormGroup;
  constructor() { }
  ngOnInit()  {
    this.loginForm= new FormGroup(
    {
/*<<<<<<< Updated upstream
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    }

    
    );}
  onLogin(){}
 
=======*/
      userId: new FormControl('',[Validators.required,Validators.email]),

    }


    );
  }
  onLogin() {

  }


/*>>>>>>> Stashed changes*/
  }