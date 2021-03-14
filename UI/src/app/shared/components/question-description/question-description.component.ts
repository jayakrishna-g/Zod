/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDescriptionService } from './question-description.service';

@Component({
  selector: 'question-description',
  templateUrl: './question-description.component.html',
  styleUrls: ['./question-description.component.scss'],
})
export class QuestionDescriptionComponent implements OnInit {
  description: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.description = this.route.snapshot?.data?.question;
  }
}
