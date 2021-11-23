import { Component, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';

@Component({
  selector: 'app-listdestination',
  templateUrl: './listdestination.component.html',
  styleUrls: ['./listdestination.component.css']
})
export class ListdestinationComponent implements OnInit {
  destinations: Dentination[] = [];
   public destinationlist(): void {
    this.dentinationService.getDentination().subscribe(
      (response) => {
        console.log(response)
        this.destinations=response
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  constructor(private dentinationService: DentinationService) { }

  ngOnInit(): void {
    this.destinationlist()
    
  }

}
