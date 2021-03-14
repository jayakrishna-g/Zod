import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { QuestionDescriptionService } from './question-description.service';

@Injectable()
export class QuestionDescriptionResolver implements Resolve<any> {
  constructor(private questionDescriptionService: QuestionDescriptionService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.questionDescriptionService.getDescription(
      route.paramMap.get('contestId') as string,
      route.paramMap.get('problemId') as string
    );
  }
}
