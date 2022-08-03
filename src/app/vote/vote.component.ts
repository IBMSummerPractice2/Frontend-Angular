import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  vote: any;
  question: string = ''
  userid: number = -1;
  comment: string = '';
  notes: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  pollId: number = -1;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    this.question = history.state.question;
  }
  panelOpenState = false;
  ngOnInit() {
    this.userid = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.pollId = Number.parseInt(this.route.snapshot.paramMap.get('pid')!);
  }
  back(): void {
    this.location.back();
  }

  saveVote(): void {
    console.log(`User ID: ${this.userid} Poll ID: ${this.pollId} Vote: ${this.vote} Comment: ${this.comment}`);
    //TODO SEND TO BACKEND
    this.location.back();
  }
}
