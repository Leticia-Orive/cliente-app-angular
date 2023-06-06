import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from './peliculas.service';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';

@NgModule({
  declarations: [
    AltaPeliculaComponent
  ],
  imports: [CommonModule],
  providers: [PeliculasService],
})
export class PeliculasModule {}
