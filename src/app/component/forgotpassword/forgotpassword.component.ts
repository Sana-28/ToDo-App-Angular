/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is forgot password componet
*/


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  model:any={};
  constructor(private userservice:UserService) { }

  ngOnInit() {
  }

/**@method:This method is to call forgot password Api*/
forgot():void
{
  console.log(this.model);
  this.userservice.postService('forgetpassword',this.model)
                    .subscribe(data=>{
                      console.log(data)});
}
}