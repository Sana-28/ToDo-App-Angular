import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelnote'
})
export class LabelnotePipe implements PipeTransform {

  transform(noteArray: Array<any>, labelId:number): any {
    if(!noteArray)
      return [];
      
    return noteArray.filter(noteObject => {
      if(noteObject.labels.length == 0)
        return false;
      return noteObject.labels.some((labelObject)=> {
        return labelObject.labelId == labelId;
      })
    })
  }
}

