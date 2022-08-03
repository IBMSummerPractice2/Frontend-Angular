import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   postProduct(data:string){
    return this.http.post<string>("http://localhost:8080/poll",data);
    }
    getProduct(){
      return this.http.get<string>("http://localhost:8080/poll");
    }
    //deleteProduct(id:number){

    //}
  }
//function data<T>(arg0: string, data: any): ApiService {
  //throw new Error('Function not implemented.');
//}


