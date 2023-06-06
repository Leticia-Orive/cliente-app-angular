import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { CinesModule } from './cines/cines.module';
import { PeliculasModule } from './peliculas/peliculas.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    CinesModule,
    PeliculasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
