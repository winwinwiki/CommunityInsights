import { Pipe, PipeTransform } from '@angular/core';

function tree(items: any[], groupKey = 'group') {
  if (!items) return [];

  const arr = [];
  const groups = {};
  let groupIndex = 0;

  items.forEach((item, i) => {
    const withIndex = {
      ...item,
      index: i
    };
    const groupName = item[groupKey];
    
    if (!groups.hasOwnProperty(groupName)) {
      groups[groupName] = groupIndex++;

      arr.push({
        name: groupName,
        children: [withIndex]
      });
    } else {
      arr[groups[groupName]].children.push(withIndex);
    }
  });

  return arr;
}

@Pipe({
  name: 'tree'
})
export class TreePipe implements PipeTransform {

  transform(arr: any[], groupKey?: string): any {
    return tree(arr, groupKey);
  }

}