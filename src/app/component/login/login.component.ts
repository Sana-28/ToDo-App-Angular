/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is login component contains login method  
*/

import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  emailControl = new FormControl('', [
    //Validators.pattern("^[\\w\\d._-]+@[\\w\\d.-]+\\.[\\w\\d]{2,6}$"),
    // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    // Validators.minLength(5),
    // Validators.maxLength(8),
    //Validators.pattern('.{4,12}'),
    Validators.pattern('[A-Za-z0-9]{8}'),
    //Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
  ]);
  match = new MyErrorStateMatcher();
  
  constructor(private userservice: UserService,
               private loginServiceObj: LoginService, 
                private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  /**@method:This method is to set form fields to null */
  //For Ngform only reset method is available
  resetForm(form?: NgForm) {

    if (form != null)
      form.reset;
      this.model = {
        email: '',
        password: ''
      }
  }

  /**@method:This method is to call login APi */
  login(): void {
    console.log("loginForm", this.model);
    this.loginServiceObj.login(this.model)
                          .subscribe(response =>
      {
     
      if (response.status === 200) {
        console.log("Check header..", response.headers.get("Authorization"));
        alert("Logined Succesfully...");

        //localStorage.setItem=this.userservice.getToken.toString;
        localStorage.setItem('Authorization', response.headers.get("Authorization"));
        
        this.router.navigate(['/home']);
          
        } else if (response.status !== 200) {
        alert("Login Failed..");
      }
    });
  }
}

