import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Poll } from '../models/poll.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
  
export class DialogComponent implements OnInit {
  // title: string = ''
  // question: string = ''
  // userid: number = -1;


  productForm!: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location,private Dialogref:MatDialogRef<DialogComponent>,private api:ApiService,private formBuilder:FormBuilder
  ) { }
  
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({ "title": ['', String] , "question" : ['', String]})
    
  }


  addquestion() {

    console.log(this.productForm.value);
    

    this.api
        .postProduct(this.productForm.value) 
        .subscribe({
          next: (res) => {
            this.productForm.reset();
            this.Dialogref.close('save');
          },
          error: () => {
            alert('Error while adding');
          },
        });

  } 


  
 
  }

