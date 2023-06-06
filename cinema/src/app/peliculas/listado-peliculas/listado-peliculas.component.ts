import { Component } from '@angular/core';
import { Pelicula } from '../peliculas.model';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css'],
})
export class ListadoPeliculasComponent {
  peliculas!: Pelicula[];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculas = this.peliculasService.getPelicula();
  }
}
