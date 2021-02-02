/* eslint-disable @typescript-eslint/naming-convention */
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UpcomingContestDetail {
  duration: string;
  end_time: Time;
  in_24_hours: string;
  site: string;
  start_time: string;
  url: string;
  name: string;
}

@Injectable()
export class UpcomingService {
  constructor(private http: HttpClient) {}

  getUpcomingContests() {
    return this.http.get<UpcomingContestDetail[]>(
      'https://kontests.net/api/v1/all'
    );
  }
}
