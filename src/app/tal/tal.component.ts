import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-tal',
  templateUrl: './tal.component.html',
  styleUrls: ['./tal.component.css']
})
export class TalComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  openDialog() {
    this.dialog.open(DialogComponent, {
    width:'30%'
    });
    }
  ngOnInit(): void {
  }

}
