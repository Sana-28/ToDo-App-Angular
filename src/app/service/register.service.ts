import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';

@Injectable()
export class RegisterService {

  constructor(private userServiceObj:UserService) { }

  register(model){
    return this.userServiceObj.postService('register', model);
  }
}
