import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineService } from './cines.service';
import { AltaCineComponent } from './alta-cine/alta-cine.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AltaCineComponent],
  imports: [CommonModule, FormsModule],
  providers: [CineService],
  exports: [AltaCineComponent],
})
export class CinesModule {}
