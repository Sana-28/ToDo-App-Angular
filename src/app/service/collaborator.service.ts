/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is collaborator Service contains method to create collaborator
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from "./user.service"


@Injectable()
export class CollaboratorService {

  model : any = {};
  constructor(private userServiceObj: UserService) { }

  /**@method: This method is to create collaborator */
  createCollaborator(model):Observable<any>{
    return this.userServiceObj.putService('addCollaborator',model);
  }

  /**method: This method is to remove collaborator */
  deleteCollaborator(model):Observable<any>{
    return this.userServiceObj.deleteService('deletecollborator',model);
  }
}
