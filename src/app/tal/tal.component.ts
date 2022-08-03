import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../service/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-tal',
  templateUrl: './tal.component.html',
  styleUrls: ['./tal.component.css']
})
export class TalComponent implements OnInit {
 /*displayedColumns: string[] = ['pName'];
 dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;*/

  constructor(private dialog:MatDialog,private api :ApiService,) { }
  openDialog() {
    this.dialog.open(DialogComponent, {
    width:'30%'
    });
    }
    getAllproduct(){
      this.api.getProduct()
      .subscribe({
        next:(res) =>{
          alert("Added")
         /* this.dataSource= new MatTableDataSource(res);//data source e modelul componentei table material https://material.angular.io/components/table/examples
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort*/
        },
        error:()=> {
          //alert("Error while fetching")
        },
      })
  
    }
  ngOnInit(): void {
    this.getAllproduct();
  }
  /*applyFilter(event: Event) {//filtru pentru componenta material table
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }*/
}
