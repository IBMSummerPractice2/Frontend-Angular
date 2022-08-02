import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   postProduct(data:string){
    return this.http.post<string>("https://localhost:8080/poll",data);
    }
    //getProduct(data :any){
    //  return this.http.get<any>("http://localhost:3000/productList/",data);
    }
 // }
//function data<T>(arg0: string, data: any): ApiService {
  //throw new Error('Function not implemented.');
//}


