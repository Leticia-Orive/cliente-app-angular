import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from './peliculas.service';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AltaPeliculaComponent],
  imports: [CommonModule, FormsModule],
  providers: [PeliculasService],
  exports: [AltaPeliculaComponent],
})
export class PeliculasModule {}
