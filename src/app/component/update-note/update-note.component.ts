import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';

import { NoteResponse } from '../../model/noteresponse';

import { UserService, NoteService } from '../../service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  model:any = {};
  note : NoteResponse;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private userServiceObj:UserService,
              private noteServiceObj:NoteService,
              public dialogRef:MatDialogRef<UpdateNoteComponent>) { }


  ngOnInit() {
    document.getElementById('updateNoteTitle').innerHTML=this.data.title;
    document.getElementById('updateNoteDescription').innerHTML=this.data.description;
  }

  updateNote(){
  
    console.log(this.data);
     this.noteServiceObj.updateNotes(this.data)
                          .subscribe(data => {
                            this.noteServiceObj.reloadNotes();
                            this.dialogRef.close();
                            
                          });

  }

  deleteImage(note) {
    this.data.noteId = note.noteId;
    this.noteServiceObj.deleteImage(this.data.noteId )
                        .subscribe(response => {
                          console.log(response);
                        });
  }
}
