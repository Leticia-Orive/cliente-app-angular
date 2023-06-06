import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineService } from './cines.service';
import { AltaCineComponent } from './alta-cine/alta-cine.component';
import { FormsModule } from '@angular/forms';
import { ListadoCinesComponent } from './listado-cines/listado-cines.component';
@NgModule({
  declarations: [AltaCineComponent, ListadoCinesComponent],
  imports: [CommonModule, FormsModule],
  providers: [CineService],
  exports: [AltaCineComponent, ListadoCinesComponent],
})
export class CinesModule {}
