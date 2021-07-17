import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = 'white';
  
  constructor() { }
  changeTheme () {
    if (this.theme = 'white') {
      this.theme = 'black'
    } else {
      this.theme = 'white'
    }
  }
}
