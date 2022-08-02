import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
//private api:ApiService,
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private api:ApiService,) { }
productForm!: FormGroup;
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({ pName :['',Validators.required]})
    
  }
addquestion(){
  if(this.productForm.valid){
    this.api.postProduct(this.productForm.value)
    .subscribe({
      next:(res) =>{
        alert("Added")
      },
      error:()=> {
        alert("Error while adding")
      },
    })

  }
  console.log(this.productForm.value);
  //this.http.post('https://localhost:8080/poll',this.productForm.value);
 // .subscribe({next:(res)=>{
   // alert("added succesfuly")},
    console.error();
    
    //console.log(res);
 /// });
}
}
