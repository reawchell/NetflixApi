import { FilmsInterface } from './../models/films';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


public Top:FilmsInterface = {
  section: 'Top',
  titulos:[
  
    {
      title: 'La Casa de Papel',
      src: './assets/images/Top10/1-papel.webp'
    },
    {
      title: 'La Reina',
      src: './assets/images/Top10/2-reina.webp'
    },
    {
      title: 'Titanes',
      src: './assets/images/Top10/3-titanes.webp'
    },

    {
      title: 'Lost In Space',
      src: './assets/images/Top10/4-lostinspace.webp'
    },

    {
      title: 'Donde Caben Dos',
      src: './assets/images/Top10/5-dondecaben.webp'
    },
    {
      title: 'Aqui no hay quien viva',
      src: './assets/images/Top10/6-aquinohay.webp'
    },
    {
      title: 'Black List',
      src: './assets/images/Top10/7-blacklist.webp'
    },
    {
      title: 'Ricos y Mimados',
      src: './assets/images/Top10/8-ricos.webp'
    },
    {
      title: 'El Poder Del Perro',
      src: './assets/images/Top10/9-poder.webp'
    },
    {
      title: 'Terminator',
      src: './assets/images/Top10/10-gooddoctor.webp'
    },
   
 
   
  ],
}
}

