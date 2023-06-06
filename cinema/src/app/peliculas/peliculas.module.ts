import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from './peliculas.service';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
@NgModule({
  declarations: [AltaPeliculaComponent, ListadoPeliculasComponent],
  imports: [CommonModule, FormsModule],
  providers: [PeliculasService],
  exports: [AltaPeliculaComponent],
})
export class PeliculasModule {}
