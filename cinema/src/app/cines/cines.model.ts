export interface Cine {
  id: number;
  nombre: string;
  cif: string;
  direccion: string;
  email: string;
  provincia: string;
  codigoPostal: number;
  telefono: number;
  cliente: string;
  sala: number;
  cine: number;
  pelicula: number;
}

export interface Sala {
  id: number;
  nombre: string;
}
