import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Space, SpacesService } from './spaces.service';

@Injectable()
export class SpacesResolver implements Resolve<Space[]> {
  constructor(private spacesService: SpacesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Space[]> {
    return this.spacesService.getAllSpaces();
  }
}
