import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';

import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
@NgModule({
  declarations: [ListadoClientesComponent],
  imports: [CommonModule, FormsModule],
  providers: [ClientesService],
  exports: [ListadoClientesComponent],
})
export class ClientesModule {}
