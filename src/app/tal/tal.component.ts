import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../service/api.service';
import { of, tap, map } from 'rxjs';
import { Poll } from '../models/poll.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tal',
  templateUrl: './tal.component.html',
  styleUrls: ['./tal.component.css'],
})
export class TalComponent implements OnInit {
  polls: Poll[] = [];
  userId: number = -1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private api: ApiService
  ) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  getAllproduct() {
    this.api
      .getProduct()
      .pipe(
        tap((polls: Poll[]) => {
          this.polls = polls;
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.userId = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.getAllproduct();
  }

  goToVote(poll: Poll) {
    this.router.navigate(['/vote', this.userId, poll.id], { state: { question: poll.question } });
  }
}
