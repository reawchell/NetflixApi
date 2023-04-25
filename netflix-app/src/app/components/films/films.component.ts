;
import { Component, Input } from '@angular/core';
import { FilmsInterface } from '../models/films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  @Input() public Films!:FilmsInterface 
  }