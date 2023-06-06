import { Cine, Sala } from './../cines.model';
import { CineService } from './../cines.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-cine',
  templateUrl: './alta-cine.component.html',
  styleUrls: ['./alta-cine.component.css'],
})
export class AltaCineComponent implements OnInit {
  cine!: Cine;
  sala!: Sala[];

  constructor(private cineService: CineService) {}

  ngOnInit() {
    this.cine = this.cineService.nuevoCine();
    this.sala = this.cineService.getSala();
  }

  nuevoCine(): void {
    this.cineService.agregarCine(this.cine);
    this.cine = this.cineService.nuevoCine();
  }
}
