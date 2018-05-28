/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for archieve contains a method to refresh notes
*/

import { Component, OnInit, Input } from '@angular/core';
import { NoteResponse } from '../../model/noteresponse';
import { UserService, NoteService } from '../../service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  notes         :NoteResponse[];
  isArchive     : any={};
  gridListView  : boolean;
  noteView      : string=localStorage.getItem('class');

  constructor(private userservice: UserService , private noteServiceObj : NoteService) { }

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
                              console.log("Notes fetched successfully",this.notes);
                            });
  };

/**
 * @method:This method is to unArchieve notes 
 * @param note
*/
  unArchive(note):void{
  console.log("Unarchive note..",note);
            note.isArchive=false;
            this.noteServiceObj.updateNotes(note)
                                .subscribe(response=>{
                                  this.noteServiceObj.getnotes();
                                   console.log(response);             
                                });
}; 
}
