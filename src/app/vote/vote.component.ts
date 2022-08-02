import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  favoriteSeason:any;
  note: string[] = ['1', '2', '3', '4','5','6','7','8','9','10'];
  constructor() { }
  panelOpenState = false;
  ngOnInit() {
  }
    

}
