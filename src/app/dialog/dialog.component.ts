import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
//private api:ApiService,
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private api:ApiService,private Dialogref:MatDialogRef<DialogComponent>,) { }
productForm!: FormGroup;//constructor pentru reacttive form
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({ pName :['',Validators.required]})
    
  }
addquestion(){//functia de adaugare a intrebarii
  if (this.productForm.valid) {
    console.log(this.productForm.value);
    this.api.postProduct(this.productForm.value)//apeleaza api.service
    .subscribe({
      next:(res) =>{
        alert("Added")//afiseaza adaugarea intrebarii
        this.productForm.reset();
        this.Dialogref.close('save');
      },
      error:()=> {
        alert("Error while adding")
      },
    })

  }
  /*getAllproduct(){//functia pentru afisarea tuturor intrebarilor
  console.log(this.productForm.value);
  this.http.post('http://localhost:8080/poll',this.productForm.value);
  .subscribe({next:(res)=>{
    alert("added succesfuly")},
    console.error();
     console.log(res);
  });
}*/
}
}
