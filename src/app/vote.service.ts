import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {MatRadioModule} from '@angular/material/radio';
@Injectable({
  providedIn: 'root'
})
export class VoteeService {

  constructor(private http: HttpClientModule) { }
  getUser(){
 //this.http.get("");
  }}
  
