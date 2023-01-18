import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsedService {
  constructor() {}

  doAThing() {
    console.log('This is the thing');
  }
}
