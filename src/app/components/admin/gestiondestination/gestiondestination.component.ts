import { Component, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';

@Component({
  selector: 'app-gestiondestination',
  templateUrl: './gestiondestination.component.html',
  styleUrls: ['./gestiondestination.component.css'],
})
export class GestiondestinationComponent implements OnInit {
  destinations: Dentination[] = [];
  destinationlist() {
    this.DentinationService.getDentination().subscribe(
      (response) => {
        this.destinations = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private DentinationService: DentinationService) {}


  ngOnInit(): void {
   this.destinationlist();
  }
}
