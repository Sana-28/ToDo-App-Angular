
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

  
  /**
   * @param items object array
   * @param term search for searchText
   */

   transform(items: any, searchText: string): any {
    if (!searchText || !items) return items;

    return SearchFilterPipe.filter(items, searchText);
  }

/**
   * @param
   */
  static filter(items: Array<{ [key: string]: any }>, searchText: string): Array<{ [key: string]: any }> {
    searchText = searchText ? searchText : "";
    const toCompare = searchText.toLowerCase();

    return items.filter(function (item: any) {
      for (let property in item) {
        if (item[property] === null) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    });
  }
}