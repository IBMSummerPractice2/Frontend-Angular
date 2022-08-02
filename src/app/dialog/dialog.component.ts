import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
//private api:ApiService,
  constructor(private formBuilder:FormBuilder,private http:HttpClientModule) { }
productForm!: FormGroup;
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({ pName :['',Validators.required],date:['',Validators.required]})
    
  }
addquestion(){
  console.log(this.productForm.value);
  //this.http.post('https://localhost:8080/polls',this.productForm.value);
}
}
