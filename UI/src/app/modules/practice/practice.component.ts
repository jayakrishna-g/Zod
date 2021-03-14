/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, Subject } from 'rxjs';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

@UntilDestroy()
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  code = 'Check';
  message = 'Submitting';
  submission: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {}

  getStatus(runId: any, cb: any) {
    this.http
      .get(`/scrapper/vjudge/status/${runId}`)
      .subscribe(async (res1) => {
        console.log(res1);
        this.message = (res1 as any).status;
        if ((res1 as any).statusType === 2) {
          await delay(2000);
          this.getStatus(runId, cb);
        } else {
          cb(res1);
        }
      });
  }

  submit(data: any) {
    console.log(data);
    this.http
      .post(
        `/scrapper/vjudge/${this.route.snapshot.params.contestId}/submit/${this.route.snapshot.params.problemId}`,
        data
      )
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        const result = res as any;
        if (result?.error) {
          this._snackBar.open(result.error, 'Close', {
            duration: 2000,
          });
        } else {
          this.submission.next(true);
          this.getStatus(result.runId, (result1: any) => {
            console.log(result1);
          });
        }
      });
  }
}
