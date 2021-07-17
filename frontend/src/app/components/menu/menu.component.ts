import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuDisplay: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  displayMenu () {
    const image: HTMLElement|null = document.querySelector('#menu img')
    const links: HTMLElement|null = document.querySelector('#links')
    if (!this.menuDisplay) {
      links.style.display = 'flex'
      let contador = 0
      const interval = setInterval(() => {
        links.style.width = contador + "px"
        contador += 20
        if (contador === 300) {
          clearInterval(interval);
        }
      }, 10)
      links.style.paddingLeft = "10px"
      image.style.transform = 'rotateZ(90deg)'
      this.menuDisplay = true
    } else {
      let contador = 300
      const interval = setInterval(() => {
        links.style.width = contador + "px"
        contador -= 20
        if (contador < 0) {
          clearInterval(interval);
        }
      }, 10)
      links.style.paddingLeft = "0px"
      image.style.transform = 'rotateZ(0deg)'
      this.menuDisplay = false
    }
  }

}
