import { Component, OnInit , Inject, Input} from '@angular/core';
import { MAT_DIALOG_DATA,
            MatDialogRef} from '@angular/material';

import { LabelResponse } from '../../model/labelresponse';

import { LabelService } from '../../service/label.service';
import { NoteService } from '../../service/note.service';
import { UserService } from '../../service';

@Component({
  selector: 'app-updatelabel',
  templateUrl: './updatelabel.component.html',
  styleUrls: ['./updatelabel.component.css']
})
export class UpdatelabelComponent implements OnInit {

  model : any = {};
  @Input() label : LabelResponse[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private userServiceObj:UserService,
                                        private noteServiceObj:NoteService,
                                         private labelServiceObj: LabelService,
                                          public dialogRef:MatDialogRef<UpdatelabelComponent> )
                                          { 
                                            this.label = data.labels;
                                          }

  ngOnInit() {
    //this.refreshLabel();
  }

  refreshPage(): void {
    window.location.reload();
  }

  /**@method: This method is to fetch labels */
  refreshLabel():void{
    this.labelServiceObj.reloadLabels();
    // this.labelServiceObj.getLabels()
    //                       .toPromise()
    //                         .then(response=>{
    //                            console.log("Labels fetched successfully..");
    //                         })
  }

   /**@method:This method is to create labels */
   createLabel(): void {
    this.labelServiceObj.createLabel(this.model)
                      .subscribe(response => {

                          console.log("Label Created successfully..", response, this.label)
                           this.dialogRef.close();
                          // this.refreshPage();
                            this.refreshLabel();
                                             });
 };

 updateLabel(labelObj):void{
   this.data=labelObj;
   console.log(this.data);

  this.labelServiceObj.updateLabel(this.data)
                        .subscribe(data => {
                          console.log(data);
                          this.dialogRef.close();
                          this.refreshLabel();
                        });
 }

 /*deleteLabel(labelObj):void{

  this.data=labelObj;
  console.log(this.data);

  this.labelServiceObj.deleteLabel(this.data)
                        .subscribe(data=>{
                          console.log(data);
                          this.dialogRef.close();
                          this.refreshLabel();
                        });
 }*/

}
