/**
 * @description:
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteFilter'
})

export class NoteFilterPipe implements PipeTransform {


  transform(notes: Array<any>, option?: any): any {
    if (!notes) return [];

    /*return notes.filter((noteObj)=>{ 
    return noteObj.isPin == option.isPin
    }); */

    return notes.filter(noteObj=>{

      var check=true;
      if(option){
        for (var index in option) {
            if(noteObj[index]!=option[index]){
              check=false;
              break;
          }
      }
      return check;
    }
    return check;
    });
  }
}
