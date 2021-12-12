import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-gestion-offre',
  templateUrl: './gestion-offre.component.html',
  styleUrls: ['./gestion-offre.component.css'],
})
export class GestionOffreComponent implements OnInit {
  offres: Offre[] = [];
  count: number;
  offrelist() {
    this.offreService.getOffre().subscribe(
      (response) => {
        this.offres = response;
        this.count = this.offres.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private offreService: OffreService) {}

  ngOnInit(): void {
    this.offrelist();
  }
}
