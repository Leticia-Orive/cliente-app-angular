import { Injectable } from '@angular/core';
import { Cine, Sala } from './cines.model';

@Injectable()
export class CineService {
  private cine: Cine[];
  private sala: Sala[];

  constructor() {
    this.sala = [
      {
        id: 0,
        nombre: 'Europa',
      },
      {
        id: 1,
        nombre: 'Asia',
      },
      {
        id: 2,
        nombre: 'Africa',
      },
      {
        id: 3,
        nombre: 'America',
      },
    ];
    this.cine = [];
  }

  getSala() {
    return this.sala;
  }

  getCine() {
    return this.cine;
  }

  agregarCine(cine: Cine) {
    this.cine.push(cine);
  }

  nuevoCine(): Cine {
    return {
      id: this.cine.length,
      nombre: '',
      cif: '',
      direccion: '',
      email: '',
      provincia: '',
      codigoPostal: 0,
      telefono: 0,
      cliente: '',
      sala: 0,
      pelicula: 0,
    };
  }
}
