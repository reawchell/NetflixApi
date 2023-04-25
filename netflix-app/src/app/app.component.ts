import { Component } from '@angular/core';
import { FilmsInterface } from './components/models/films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'netflix-app';
  public Accion= {
    section: 'Accion',
    titulos:[
      {
        title: 'Ejércitos Muertos',
        src: './assets/images/Accion/ejercitomuertos.jpg'
      },
      {
        title: 'El Protector',
        src: './assets/images/Accion/elprotector.webp'
      },
      {
        title: 'Equalizer 2',
        src: './assets/images/Accion/equalizer2.webp'
      },
  
      {
        title: 'johnwick2',
        src: './assets/images/Accion/johnwick2.webp'
      },
  
      {
        title: 'Jack Reacher',
        src: './assets/images/Accion/jackreacher.webp'
      },
      {
        title: 'Heat',
        src: './assets/images/Accion/heat.webp'
      },
      {
        title: 'Bill Bill 2',
        src: './assets/images/Accion/killbill2.webp'
      },
      {
        title: 'Misión Imposible',
        src: './assets/images/Accion/misionimposiblenacion.webp'
      },
      {
        title: 'Renacido',
        src: './assets/images/Accion/renacido.webp'
      },
      {
        title: 'Terminator',
        src: './assets/images/Accion/terminator2.webp'
      },
      {
        title: 'World Warz',
        src: './assets/images/Accion/worldwarz.webp'
      },
      {
        title: 'Ejércitos Muertos',
        src: './assets/images/Accion/ejercitomuertos.jpg'
      },
     
      {
        title: 'Heat',
        src: './assets/images/Accion/heat.webp'
      },
    ],
  };



  

  title2 = 'netflix-app';
  public Anime= {
    section: 'Anime',
    titulos:[
      {
        title: 'Ajin',
        src: './assets/images/Anime/ajin.jpg'
      },
      {
        title: 'Castillo Ambulante',
        src: './assets/images/Anime/castilloambulante.webp'
      },
      {
        title: 'La Puta',
        src: './assets/images/Anime/laputa.webp'
      },
      {
        title: 'Mononoque',
        src: './assets/images/Anime/ajin.jpg'
      },
      {
        title: 'Perfect Blue',
        src: './assets/images/Anime/perfectblue.webp'
      },
      {
        title: 'Pocorosso',
        src: './assets/images/Anime/porcorosso.webp'
      },
    
    ],
    };

    title3 = 'netflix-app';
  public Comedia= {
    section: 'Comedia',
    titulos:[
      {
        title: 'Casi 300',
        src: './assets/images/Comedia/casi300.webp'
      },
      {
        title: 'Caza Gantasmas',
        src: './assets/images/Comedia/cazafantasmas.webp'
      },
      {
        title: 'Dictador',
        src: './assets/images/Comedia/dictador.webp'
      },
      {
        title: 'Erase Hollywood',
        src: './assets/images/Comedia/erasehollywood.webp'
      },
      {
        title: 'Family Guy',
        src: './assets/images/Comedia/family guy.webp'
      },
      {
        title: 'La terminal',
        src: './assets/images/Comedia/laterminal.webp'
      },
    
    ],
    };

    title4 = 'netflix-app';
    public Drama= {
      section: 'Drama',
      titulos:[
        {
          title: '1917',
          src: './assets/images/Drama/1917.webp'
        },
        {
          title: 'Arrival',
          src: './assets/images/Drama/arrival.webp'
        },
        {
          title: 'Club Lucha',
          src: './assets/images/Drama/clublucha.webp'
        },
        {
          title: 'Corazones de Acero',
          src: './assets/images/Drama/corazones.webp'
        },
        {
          title: 'Culpable',
          src: './assets/images/Drama/culpable.jpg'
        },
        {
          title: 'Milla Verde',
          src: './assets/images/Drama/millaverde.webp'
        },
        {
          title: 'Nauefrago',
          src: './assets/images/Drama/naufrago.webp'
        },
        {
          title: 'No Es Pais Para Viejos',
          src: './assets/images/Drama/noespais.webp'
        },
        {
          title: 'Salvar al Soldado Ryan',
          src: './assets/images/Drama/salvaralsoldado.webp'
        },
        {
          title: 'El Precio Del Poder',
          src: './assets/images/Drama/scarface.webp'
        },
        {
          title: 'La Lista de Schindler',
          src: './assets/images/Drama/schindler.webp'
        },
        {
          title: 'La Sombra del Diablo',
          src: './assets/images/Drama/sombradiablo.webp'
        },
      
      ],
      };

      
    title5 = 'netflix-app';
    public Scifi= {
      section: 'Sci-fi',
      titulos:[
        {
          title: '6 Dias',
          src: "./assets/images/Sci-fi/6dia.webp"
        },
        {
          title: '12 Monos',
          src: "./assets/images/Sci-fi/12monos.webp"
        },
        {
          title: 'After Arth',
          src: "./assets/images/Sci-fi/afterearth.webp"
        },
        {
          title: 'Colver Paradox',
          src: "./assets/images/Sci-fi/colverparadox.jpg"
        },
        {
          title: 'Core',
          src: "./assets/images/Sci-fi/core.webp"
        },
        {
          title: 'La terminal',
          src: "./assets/images/Sci-fi/deepimpact.webp"
        },
        {
        title:'Deep Impact ',
        src: "../assets/images/Sci-fi/deepimpact.webp",
      },
      {
        title:'Doom ',
        src: "./assets/images/Sci-fi/doom.webp",
      },
      {
        title:'Gits ',
        src: "./assets/images/Sci-fi/gits.webp",
      },
      {
        title:' Jumper',
        src: "./assets/images/Sci-fi/jumper.webp",
      },
      {
        title:'Passengers ',
        src: "./assets/Sci-fi/images/passengers.webp",
      },
      {
        title:' Transformers',
        src: "./assets/Sci-fi/images/transformers.webp",
      },
      {
        title:'Watchmen ',
        src: "./assets/Sci-fi/images/watchmen.webp",
      },
      {
        title:'Strattrek ',
        src: "./assets/Sci-fi/images/startrek.webp",
      }]
    };

    title6 = 'netflix-app';
    public Terror= {
      section: 'Terror',
      titulos:[
        {
        title:' El Apostos', 
      src: "./assets/images/Terror/apostol.jpg",
    },
    {
      title:' Calle Terror',
      src: "./assets/images/Terror/calleterror.jpg",
    },
    {
      title:' Infierno en el Agua',
      src: "./assets/images/Terror/infiernoagua.webp",
    },
    {
      title:'Insiduos 2 ',
      src: "./assets/images/Terror/insidious2.webp",
    },
    {
      title:'Life ',
      src: "./assets/images/Terror/life.webp",
    },
    {
      title:'Multiple ',
      src: "./assets/images/Terror/multiple.webp",
    },
    {
      title:'Multiple ',
      src: "./assets/images/Terror/multiple.webp",
    },
    {
      title:'Reflejos ',
      src: "./assets/images/Terror/reflejos.webp",
    }]
  };
}