import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../service/api.service';
import { of, tap, map, catchError, EMPTY } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @HostListener('document:keydown.enter', ['$event'])
  pressEnter() {
    this.login();
  }

  id: any;
  constructor(private router: Router, private api: ApiService) {}
  ngOnInit() {
  }
  
  login() {
      this.api.getUser(this.id)
        .pipe(
          tap(user => {
            console.log(user);
            this.router.navigate(['./dashboard', user.id]);
          }),
          catchError((err, caught) => {
            alert("User not found!");
            return EMPTY;
          })
        )
        .subscribe();
  }
}
