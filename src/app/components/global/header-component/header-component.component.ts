import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  flagToggleMenu: boolean;

  constructor() {
    this.flagToggleMenu = false;
  }


  toogleMenu(): void {

    const headerComponent = document.getElementById('header_contenedor');
    const btnMenu = document.getElementById('btn_menu');

    this.flagToggleMenu = !this.flagToggleMenu;
    if (this.flagToggleMenu === true)
    {
      btnMenu.innerHTML = 'Cerrar';
      headerComponent.style.marginLeft = '0px';
    } else {
      headerComponent.style.marginLeft = '120vw';
      btnMenu.innerHTML = 'Menú';
    }


  }


  ngOnInit(): void {
  }

}
