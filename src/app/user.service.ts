import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClientModule) { }
  getUser(){
 //this.http.get("");
}
}