import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineService } from './cines.service';
import { AltaCineComponent } from './alta-cine/alta-cine.component';

@NgModule({
  declarations: [
    AltaCineComponent
  ],
  imports: [CommonModule],
  providers: [CineService],
})
export class CinesModule {}
