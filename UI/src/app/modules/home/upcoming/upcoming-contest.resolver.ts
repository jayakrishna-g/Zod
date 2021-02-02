import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UpcomingContestDetail, UpcomingService } from './upcoming.service';

@Injectable()
export class UpcomingContestResolver
  implements Resolve<UpcomingContestDetail[]> {
  constructor(private upcomingContestService: UpcomingService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UpcomingContestDetail[]> {
    return this.upcomingContestService.getUpcomingContests();
  }
}
