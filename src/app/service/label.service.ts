/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is Label Service contains method to create label,get label, add and remove label
*/
import { Injectable,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { UserService } from './user.service';
import { LabelResponse } from '../model/labelresponse';

@Injectable()
export class LabelService {

  private labelSubject = new Subject<any>();
  public labels : Array<any> = [];
  constructor(private userServiceObj: UserService) { }

  @Output() changeLabel: EventEmitter<Array<any>> = new EventEmitter();

  reloadLabels():void{
    var path = "getlabels";
    this.userServiceObj.getService(path)
                        .toPromise()
                          .then((res)=>{
                            this.labels = res;
                            this.changeLabel.emit(res);
                            this.labelSubject.next(res);
                          });
   }

   getlabels():Observable<LabelResponse[]>
    {
      setTimeout(this.reloadLabels.bind(this))
        return this.labelSubject.asObservable();
    }

  /**@method: This method is to fetch label */
  getLabels(): Observable<LabelResponse[]> {
    return this.userServiceObj.getService('getlabels');

  }

  /**@method: This method is to create label */
  createLabel(label): Observable<any> {
    return this.userServiceObj.putService('createlabel', label);
  }

  /**@method: This method is to add and remove label */
  addRemoveLabel(status, labelId, noteId): Observable<any> {
    return this.userServiceObj.putServiceLabel('addremovelabel' + '/' + noteId + '/' + labelId + '/' + status.bubbles);
  }

  updateLabel(data): Observable<any> {
    return this.userServiceObj.putService('updatelabel',data);
  }

  deleteLabel(labelId, noteId):Observable<any>{
    return this.userServiceObj.deleteServiceLabel('deletelabel' + '/' + labelId + '/' + noteId);
  }
}
