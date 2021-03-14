import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success) {
            this.toasterService.success(
              evt.body.success.message,
              evt.body.success.title,
              { positionClass: 'toast-bottom-center' }
            );
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            this.toasterService.error(err.error.message, err.error.title, {
              positionClass: 'toast-bottom-center',
            });
          } catch (e) {
            this.toasterService.error('An error occurred', '', {
              positionClass: 'toast-bottom-center',
            });
          }
          //log error
        }
        return of(err);
      })
    );
  }
}
