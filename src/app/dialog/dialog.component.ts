import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
productForm!: FormGroup;
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({})
    ProductName :['',Validators.required]
  }
addQuestion(){
  console.log(this.productForm.value);
}
}
