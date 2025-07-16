// src/app/interceptor/auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if we're in a browser environment (not server-side rendering)
    if (typeof window !== 'undefined' && window.localStorage) {
      const authToken = localStorage.getItem('token'); // Get token from storage
      console.log("===================Hey =================");
      console.log(authToken);
      console.log("===================Hey@=================");

      if (authToken) {
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${authToken}`
          }
        });
        return next.handle(cloned);
      }
    }

    return next.handle(req);
  }
}
