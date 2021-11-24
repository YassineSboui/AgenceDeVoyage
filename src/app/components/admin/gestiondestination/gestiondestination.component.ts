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
  destination: Dentination = new Dentination(" "," "," "," ",0,0,0);
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
  
  destinationSelect(city : string) {
    this.DentinationService.getOneDentination(city).subscribe(
      (response) => {
        this.destination=response;
        return this.destination ;

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
