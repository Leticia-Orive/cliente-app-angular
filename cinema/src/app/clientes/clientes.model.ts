export interface Cliente {
  id: number;
  nombre: string;
  cif: string;
  direccion: string;
  email: string;
  provincia: string;
  codigoPostal: number;
  telefono: number;
  grupo: number;
  sala: number;
  cine: number;
  pelicula: number;
}

export interface Grupo {
  id: number;
  nombre: string;
}
