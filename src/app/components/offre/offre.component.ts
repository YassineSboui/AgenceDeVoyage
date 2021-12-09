import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  offres: Offre[] = [];
  count: number;
  offrelist() {
    this.offreService.getOffre().subscribe(
      (response) => {
        this.offres = response;
        this.count = this.offres.length;
        console.log(this.offres)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private offreService: OffreService) { }

  ngOnInit(): void {
    this.offrelist()
  }

}
