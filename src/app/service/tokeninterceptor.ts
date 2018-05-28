/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:
*/

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log("In interceptor");

  if(this.auth.getToken()){
        request = request.clone({
            setHeaders: {
            Authorization: this.auth.getToken()
          }
        });
    }

    return next.handle(request);
  }
}