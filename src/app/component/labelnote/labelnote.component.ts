/**
 * @author :
 * @since :
 * @description :
 * 
 */

import { Component, OnInit } from '@angular/core';
import { UserService, NoteService, LabelService } from '../../service';
import { ActivatedRoute } from '@angular/router';
import { NoteResponse } from '../../model/noteresponse';

@Component({
  selector: 'app-labelnote',
  templateUrl: './labelnote.component.html',
  styleUrls: ['./labelnote.component.css']
})
export class LabelnoteComponent implements OnInit {

  public id;
  public labelId:number;
  model:any;
  notes:NoteResponse[];

  constructor(private route: ActivatedRoute,
                private noteServiceObj: NoteService) { }

  ngOnInit() {
    this.noteServiceObj.getNotes()
                          .subscribe(response => {
                            this.notes =response;
                              //console.log("Notes..", this.notes=response);
                          });
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('note label  component Id :',this.id);    
   });
  }
}