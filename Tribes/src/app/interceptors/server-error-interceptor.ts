import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
    retry(1),
    catchError((error: HttpErrorResponse) => {
      if (error.error.message === 'Unauthorized') {
        this.router.navigateByUrl('/login');
      } else if (error.status === 0){
        this.router.navigateByUrl('/error');
      }
      return throwError(error);
    }));
  }
}
