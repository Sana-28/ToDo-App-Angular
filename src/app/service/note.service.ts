/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is Note Service contains method to create note,update note,delete note,get notes
*/
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { UserService } from "./user.service"
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NoteResponse } from '../model/noteresponse';


@Injectable()
export class NoteService {

  status:boolean = true;  
  private viewSubject = new Subject<any>();
  private noteSubject = new Subject<any>();

  constructor(private userServiceObj : UserService ) { }

  /**@method: This method is to fetch notes */
  reloadNotes():void{
    var path = "getnotes";
    //debugger;
    this.userServiceObj.getService(path)
                        .toPromise()
                          .then((res)=>{
                            
                            this.noteSubject.next(res);
                          
                            console.log("Notes fetched successfully");
                          });
   }

   getnotes():Observable<NoteResponse[]>
    {
      setTimeout(this.reloadNotes.bind(this))
        return this.noteSubject.asObservable();
    }
   
  changeView(){
    this.status = !this.status;
    this.viewSubject.next(this.status);
  }

  getStatus(){
    return this.viewSubject.asObservable();
  }


  /**@method: This method is to fetch notes */
  getNotes () : Observable<NoteResponse[]>{
    return this.userServiceObj.getService('getnotes');
  }

   /**@method: This method is to create notes */
  createNotes(note) :Observable<any>{
    return this.userServiceObj.putService('createnotes', note);
  }

   /**@method: This method is to update notes */
  updateNotes(note):Observable<any>{
    return this.userServiceObj.putService('updatenotes',note);
  }

   /**@method: This method is to delete notes */
  deleteNotes(note): Observable<any>{
    return this.userServiceObj.deleteService('deletenotes',note);
  }

  /**@method: This method is to upload image of notes */
  uploadImage(model):Observable<any>{
    console.log("Checking upload image in service", model)
    //return this.userServiceObj.putService('uploadNoteImage',model);
    return this.userServiceObj.imageUpload('uploadNoteImage',model);
  }

  /**@method: This is to delete Image */
  deleteImage(model):Observable<any>{
    return this.userServiceObj.imageDelete('deleteImage',model);
  }
}
