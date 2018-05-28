/*****
 * @author Sana Shaikh
 * @since 9/04/2018
 * @description This is register component contains a method to register user.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any={};

  nameControl = new FormControl('', [
    Validators.required,
    //Validators.pattern('[a-zA-Z0-9]'),
   ]);

   emailControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('.{4,12}'),
  ]);

  mobileControl = new FormControl('',[
    Validators.required,
    //Validators.pattern("[0-9]{0-10}")
  ]);

  constructor(private userservice:UserService,
                private registerSericeObj:RegisterService) { 
  }

/*****
 * @method resetForm
 * @argument {form?:}
 * @description This method is used to reset form fields to null
 */
  ngOnInit() {
    this.resetForm();
    }

  /**@method: This method is to set form fields to null*/
  resetForm(form? : NgForm){
    if(form!=null)
    form.reset();
    this.model={
      name:'',
      email:'',
      password:'',
      mobileNo:''
    }
  }

 /**@method:This method is to call register Api */
  register():void{
    
    console.log(this.model);
    this.registerSericeObj.register(this.model)
                            .subscribe(data=>console.log(data));
                            alert("Registered Successfully..");
                              this.resetForm();
  }
}
