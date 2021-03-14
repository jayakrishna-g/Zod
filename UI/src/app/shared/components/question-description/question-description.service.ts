import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionDescriptionService {
  constructor(private http: HttpClient) {}

  getDescription(contestId: string, problemId: string) {
    return this.http.get(
      `/scrapper/vjudge/problemDescription/${contestId}/${problemId}`
    );
  }
}
