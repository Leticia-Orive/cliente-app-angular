import { Component } from '@angular/core';
import { Cine } from '../cines.model';
import { CineService } from '../cines.service';

@Component({
  selector: 'app-listado-cines',
  templateUrl: './listado-cines.component.html',
  styleUrls: ['./listado-cines.component.css'],
})
export class ListadoCinesComponent {
  cines!: Cine[];

  constructor(private cineService: CineService) {}

  ngOnInit() {
    this.cines = this.cineService.getCine();
  }
}
