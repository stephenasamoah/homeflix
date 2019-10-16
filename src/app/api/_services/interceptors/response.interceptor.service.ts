import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseModel } from '../../_models/response.model';

@Injectable({ providedIn: 'root' })

export class ResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (!(event.status && event.status >= 200 && event.status < 300)) {
          throw throwError(event);
        }
      }
      return event;
    }), catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        return throwError(err.error);
      }
      return throwError(err);
    }));
  }
}
