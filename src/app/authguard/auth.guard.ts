/**
 * @description: This is Auth guard implementation for restricting routes
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router) {
     }

     /**@method: This method can activate routes and navigate to login */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('Authorization')) {
       
            return true;
        }
      
        this.router.navigate(['/login']);
        return false;
    }

    /**@method: This is to activate child routes */
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('Authorization')) {
       
            return true;
        }
      
        this.router.navigate(['/login']);
        return false;
    }

};

@Injectable()
export class LoginAuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
     /**Parent routing */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!localStorage.getItem('Authorization')) {
       
            return true;
        }
      
        this.router.navigate(['/home/createnotes']);
        return false;
    }
};

/*@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private userService: UserService) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}*/
   
   
