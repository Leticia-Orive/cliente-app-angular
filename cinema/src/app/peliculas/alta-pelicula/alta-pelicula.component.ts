import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../peliculas.model';
import { PeliculasService } from '../peliculas.service';
@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css'],
})
export class AltaPeliculaComponent implements OnInit {
  pelicula!: Pelicula;

  constructor(private peliculaService: PeliculasService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nuevaPelicula(): void {
    this.peliculaService.agregarPelicula(this.pelicula);
    this.pelicula = this.peliculaService.nuevaPelicula();
  }
}
