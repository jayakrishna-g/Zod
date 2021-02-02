import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogsService } from './blogs.service';

@Injectable()
export class BlogResolver implements Resolve<any> {
  constructor(private blogService: BlogsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.blogService.fetchBlogs('abc');
  }
}
