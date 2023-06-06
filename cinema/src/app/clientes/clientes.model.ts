export interface Cliente {
  id: number;
  nombre: string;
  cif: string;
  direccion: string;
  email: string;
  provincia: string;
  codigoPostal: number;
  telefono: number;
  id_grupo: number;
  id_sala: number;
  id_cine: number;
  id_pelicula: number;
}

export interface Grupo {
  id: number;
  nombre: string;
  id_cliente: number;
}
