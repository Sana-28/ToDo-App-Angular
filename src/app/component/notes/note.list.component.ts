/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is notes component contains methods to create and update notes
*/

import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormControl, NgForm, FormGroupDirective } from '@angular/forms';

import { environment } from '../../../environments/environment';

import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { UpdateNoteComponent } from '../update-note/update-note.component';

import { NoteResponse } from '../../model/noteresponse';
import { LabelResponse } from '../../model/labelresponse';
import { CollaboratorResponse } from '../../model/collaboratorresponse';

import { NoteFilterPipe } from '../../filter/notefilter.pipe';

import { UserService, NoteService, LabelService } from '../../service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-notes',
  templateUrl: './note.list.component.html',
  styleUrls: ['./note.list.component.css']
})
export class NoteListComponent implements OnInit {

      model     : any = {};
      inTrash   : any = {};
      isArchive : any = {};
      isPin     : any = {};
      response  : any = {};
      searchText: string = "";
  fileToUpload  : File = null;
  gridListView  : boolean;
  noteView      : string=localStorage.getItem('class');
  searchForm    : FormGroup;
  inputFormControl: FormControl;

  notes         : NoteResponse[]; //= [{noteId:0,title:"sample", description : "fdfsdf" }];
  labels        : LabelResponse[];
  collaborators : CollaboratorResponse[];

  pinSvg    ='/assets/icons/pin.svg';
  unpinSvg  ='/assets/icons/unpin.svg';
  colorSvg  ='/assets/icons/colorSvg';
  crossSvg  = '/assets/icons/cross.svg';

  colors = [{
    color: '#FF0000',
    path: '/assets/icons/Red.png'
  }, {
    color: '#fcff77',
    path: '/assets/icons/yellow.png'
  }, {
    color: '#80ff80',
    path: '/assets/icons/green.png'
  }, {
    color: '#9ee0ff',
    path: '/assets/icons/skyblue.png'
  }, {
    color: '#7daaf2',
    path: '/assets/icons/blue.png'
  }, {
    color: '#9966ff',
    path: '/assets/icons/purple.png'
  }, {
    color: '#ff99cc',
    path: '/assets/icons/pink.png'
  }
  ];

  constructor(private userservice: UserService,
              private noteServiceObj: NoteService ,
                private labelServiceObj:LabelService,
                  private dialog: MatDialog) 
                  {
                    userservice.searchObservable$.subscribe(
                      FormData=>{
                        this.searchText = FormData;
                        console.log(this.searchText);

                      })
                   }


  /**@method:This ngOnInit method loads all the notes at the time of initialization */
  ngOnInit() {
    this.readNote();
    this.noteServiceObj.getStatus()
                        .subscribe((status)=>{
                            this.noteView = status ? "list-view" : "grid-view";
                            localStorage.setItem('class',this.noteView);
                          });
  }

  /**@method:This method is to fetch notes */
  readNote(): void {
    this.noteServiceObj.getnotes()
                          .subscribe(response => {
                             this.notes = response;
                             //debugger;
                             this.notes.forEach(note =>{
                              note.imageString = 'data:image/JPEG;base64,' + note.noteImage;
                              });
                              console.log("Notes fetched successfully",this.notes);
                            });
  };

  /**@method: This method is to fetch labels */
  readLabel():void{
    this.labelServiceObj.getlabels()
                          .subscribe(response=>{
                              this.labels = response;
                                console.log("Labels fetched successfully..");
                            });
  }

  /**@method:This method is to create notes */
  createNote(): void {
    this.noteServiceObj.createNotes(this.model)
                      .subscribe(response => {
                        //  this.refreshPage();
                        this.noteServiceObj.reloadNotes(); 
                        alert("Note Created.."); 
                          console.log("Note Created successfully..", response, this.notes);
                        });
  };


  /**@method: This method is to fetch labels */
  refreshLabel():void{
    this.labelServiceObj.reloadLabels();
  }
  
  /**@method:This method is to move the notes to trash
   * @param:note,status,field
   */
  update(note):void{
    this.noteServiceObj.updateNotes(note)
                        .subscribe(response => {
                          this.noteServiceObj.reloadNotes();  
                            console.log(response);
                          });
  }

  updateNotes(note,status,field){

    if(field =='trash'){

        note.inTrash=status;
        this.update(note);
        console.log("Moved notes to trash..");
    }

    else if(field =='archive'){

        note.isArchive=status;
        this.update(note);
        console.log("Moved notes to archive...");
    }

    else if(field == 'pin'){

        note.isPin=status;
        this.update(note);
        console.log("Pin note..");
    }

    else if(field == 'pin'){

        note.isPin=status;
        this.update(note);
        console.log("Unpinned note..");
    }

    else if(field == 'color'){
     
        this.update(note);
        console.log("Set color");
      }
  };

/**@method:This method is to set reminder of notes
 * @param:note
 * @param:field
 */
remind(note):void{
  this.noteServiceObj.updateNotes(note)
                      .subscribe(response=>{
                        console.log(response);
                         this.readNote();
                                            });
}

saveReminder(note,field){
 
  var today =new Date();

  if(field == 'today'){

      today.setHours(20);
      today.setMinutes(0);
      today.setMilliseconds(0);
      note.reminder= today;
      this.remind(note);
  }
  else if(field == 'tomorrow'){

      today.setDate(today.getDate()+1);
      today.setHours(8);
      today.setMinutes(0);
      today.setMilliseconds(0);
      note.reminder= today;
      this.remind(note);

  }else if(field == 'nextWeek'){

      today.setDate(today.getDate()+6);
      today.setHours(8);
      today.setMinutes(0);
      today.setMilliseconds(0);
      note.reminder=today;
      this.remind(note);
  }
  else if(field == 'pickDate'){

    today.setDate(today.getDate());
    today.setHours(8);
    today.setMinutes(0);
    today.setMilliseconds(0);
    note.reminder=today;
    this.remind(note);
  }

  else if (field == 'null') {
           
    note.reminder=null;
    this.remind(note);
}
}

/**@method: This method is to add label */
addLabel():void{
  this.labelServiceObj.getLabels()
                        .subscribe(response=>{
                          this.labels=response;
                         this.labelServiceObj.reloadLabels();
                          console.log("Label fetched successfully..",response, this.labels);
                        });
}

optionChange(status, labelId, noteId){
 
  console.log("Checkk..",status.bubbles);
  this.labelServiceObj.addRemoveLabel(status, labelId, noteId)
                        .subscribe(response=>{
                          console.log("status changed..");
                        });
}

/**@method:This method is to remove label 
 * @param note
 * @param labelId
 * @param field

removeLabel(note,labelId,field){

  note.labels=null;
  this.labelServiceObj.addRemoveLabel(labelId,note,field);
                       console.log(note,labelId,field);
}*/

/*removeLabel(labelId){

  this.model.labelId=labelId;
  this.labelServiceObj.deleteLabel(labelId)
                      .subscribe(response => {
                        this.noteServiceObj.reloadNotes();  
                        console.log("Removed label", response);
                      });
}*/

/**@method: This method is to open collaborator dialog 
 * @param note
*/
openCollaboratorDialog(note){
  this.dialog.open(CollaboratorComponent, {
    data : note,
    width: '350px',
    height: '210px'
  });
};

/**@method:This method is to upload a image 
 * @param noteId
 * @param event
 */
handleFileInput(event,noteId) {

  this.model.event= event;
  console.log("Note image->>", event)

  this.model.noteId=noteId;
  
  this.noteServiceObj.uploadImage(this.model)
                      .subscribe(response=>{
                        this.noteServiceObj.reloadNotes();  
                       console.log("Image uploaded successfully..");
  });
}

openNoteDialog(note){
  this.dialog.open(UpdateNoteComponent,{
   data : note,
     width: '350px',
    //  height: '210px'
  });
}

searchTextForm(){
  console.log("Test for search",this.inputFormControl);
  this.searchForm.valueChanges.subscribe(
    (formData) => {
      console.log(formData.inputFormControl);
      this.userservice.searchData(formData.inputFormControl);
    });
}
};