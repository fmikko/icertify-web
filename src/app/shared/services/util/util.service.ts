import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  // env
  empties = [null, undefined];

  constructor() {}

  // fn
  traverseArray(arr: any[], path: string, values: any[] = []): any {
    if (!arr.length) return values.join(', ');

    const arrCopy = [...arr];
    const obj = arrCopy.splice(0, 1)[0];

    const foundVal = this.deepFind(obj, path);
    if (foundVal) values.push(foundVal);
    return this.traverseArray(arr.slice(1), path, values);
  }

  deepFind(obj: any, path: string | Array<string | number>): any {
    if (!obj) return '';
    if (obj && !path) return '';

    if (typeof path == 'string') return this.deepFind(obj, path.split('.'));
    else if (path.length == 0) return this.empties.includes(obj) ? '' : obj;
    else if (Array.isArray(obj)) {
      return this.traverseArray(obj, path.join('.'));
    } else return this.deepFind(obj[path[0]], path.slice(1));
  }
}
