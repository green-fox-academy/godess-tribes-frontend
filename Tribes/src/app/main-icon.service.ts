import { Injectable } from '@angular/core';

import { MainIcon } from './main-icon';
import { MAINICONS } from './mock-main-icons';


@Injectable({
  providedIn: 'root'
})
export class MainIconService {

  constructor() { }

  getMainIcons(): MainIcon[] {
    return MAINICONS;
  }
}
