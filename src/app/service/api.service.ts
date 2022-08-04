import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';
import { User } from '../models/user.mode';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postProduct(data: Poll) {
    return this.http.post<Poll>('http://localhost:8080/poll', data);
  }
  getProduct(): Observable<Poll[]> {
    return this.http.get<Poll[]>('http://localhost:8080/poll/all');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/find-user/' + id);
  }
  //deleteProduct(id:number){

  //}
}
//function data<T>(arg0: string, data: any): ApiService {
//throw new Error('Function not implemented.');
//}
