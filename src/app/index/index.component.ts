import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  datos: any;

  constructor() {

    this.datos = {
      datos: [{
        icono: './assets/image/blog.svg',
        titulo: 'Publicar un trabajo',
        texto: 'Es fácil. Simplemente publica un trabajo que necesitas realizar y recibe ofertas competitivas de freelancers en cuestión de minutos.',

      }, {
        icono: './assets/image/seleccionar.svg',
        titulo: 'Elige freelancers',
        texto: 'Independientemente de tus necesidades, existirá un freelancer que lo haga: desde diseño web, desarrolladores de app móviles, asistentes virtuales, fabricación de productos y diseño gráfico (y mucho más).',

      }, {
        icono: './assets/image/metododepago.svg',
        titulo: 'Paga de manera segura',
        texto: 'Con pagos seguros y miles de profesionales evaluados entre los cuales elegir, Freelancer.com es la manera más simple y segura de hacer trabajo en línea.',
      }]
    };

  }

  ngOnInit(): void {
  }

}
