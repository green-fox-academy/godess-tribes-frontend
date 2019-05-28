import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.error.message === 'Unauthorized') {
          this.router.navigateByUrl('/login');
          localStorage.removeItem('TOKEN');
        } else if ((error.status === 0) || (error.status >= 500) || (error.error instanceof ErrorEvent)) {
          this.router.navigateByUrl('/error');
        }
        return throwError(error);
    }));
  }
}
