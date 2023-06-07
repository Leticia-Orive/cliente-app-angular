import { Injectable } from '@angular/core';
import { Grupo } from './clientes.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GruposService {
  private apiUrl = 'http://localhost:4200/grupos';
  grupos: { id: number; nombre: string }[];
  constructor(private http: HttpClient) {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir',
      },
      {
        id: 1,
        nombre: 'Activos',
      },
      {
        id: 2,
        nombre: 'Inactivos',
      },
      {
        id: 3,
        nombre: 'Deudores',
      },
    ];
  }

  //Obtener todos los grupos
  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl);
  }

  //Obtener un grupo por id
  getGrupo(id: number): Observable<Grupo> {
    const url = '${this.apiUrl}/$(id)';
    return this.http.get<Grupo>(url);
  }
  //Crear un nuevo grupo
  crearGrupo(grupo: Grupo): Observable<Grupo> {
    const httpOptions = {
      Headers: new HttpHeaders({ 'Content-Type': 'apication/json' }),
    };
    return this.http.post<Grupo>(this.apiUrl, grupo, httpOptions);
  }
  //Actualizar un grupo existente
  actualizarGrupo(grupo: Grupo): Observable<Grupo> {
    const url = '${this.apiUrl}/${grupo.id}';
    const httpOptions = {
      Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Grupo>(url, grupo, httpOptions);
  }
  //Eliminar un grupo
  eliminarGrupo(id: number): Observable<any> {
    const url = '${this.apiUrl}/${id}';
    return this.http.delete(url);
  }
}
