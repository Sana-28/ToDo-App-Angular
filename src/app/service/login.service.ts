import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from "./user.service"

@Injectable()
export class LoginService {

  constructor(private userServiceObj : UserService) { }

  login(model): Observable<any>{
    return this.userServiceObj.postService('login', model);
  }
}
