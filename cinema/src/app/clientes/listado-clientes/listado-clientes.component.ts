import { Component } from '@angular/core';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
})
export class ListadoClientesComponent {
  clientes: Cliente[] = [];
  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clientesService
      .getClientes()
      .subscribe((clientes) => (this.clientes = clientes));
  }
}
