export interface Cine {
  id: number;
  nombre: string;
  cif: string;
  direccion: string;
  email: string;
  provincia: string;
  codigoPostal: number;
  telefono: number;
  id_cliente: number;
  id_sala: number;
  id_cine: number;
  id_pelicula: number;
}

export interface Sala {
  id: number;
  nombre: string;
  id_cliente: number;
  id_cine: number;
  id_pelicula: number;
}
