import { Injectable } from '@angular/core';
import { Pelicula } from './peliculas.model';

@Injectable()
export class PeliculasService {
  private peliculas: Pelicula[];

  constructor() {
    this.peliculas = [];
  }

  getPelicula() {
    return this.peliculas;
  }

  agregarPelicula(peliculas: Pelicula) {
    this.peliculas.push(peliculas);
  }

  nuevaPelicula(): Pelicula {
    return {
      id: this.peliculas.length,
      titulo: '',
      director: '',
      genero: '',
      actor: '',
      fecha_estreno: 0,
      cliente: '',
      sala: 0,
      cine: 0,
    };
  }
}
