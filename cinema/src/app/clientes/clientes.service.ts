import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './clientes.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = 'http://localhost:4200/clientes';
  private grupos: Grupo[];

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

  //Obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  //Obtener un cliente por id
  getCliente(id: number): Observable<Cliente> {
    const url = '${this.apiUrl}/${id}';
    return this.http.get<Cliente>(url);
  }

  //Crear un nuevo cliente
  crearCliente(cliente: Cliente): Observable<Cliente> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Cliente>(this.apiUrl, cliente, httpOptions);
  }

  //Actualizar un cliente existente
  actualizarCliente(cliente: Cliente): Observable<Cliente> {
    const url = '${this.apiUrl}/${cliente.id}';
    const httpOptions = {
      Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'body',
    };
    return this.http.put<Cliente>(url, cliente, httpOptions);
  }

  // Eliminar un cliente
  eliminarCliente(id: number): Observable<any> {
    const url = '${this.apiUrl}/${id}';
    return this.http.delete(url);
  }
}
