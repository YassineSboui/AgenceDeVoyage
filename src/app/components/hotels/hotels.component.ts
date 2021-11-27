import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  identifiant: any;
  destination: Dentination;
  destinationSelect() {
    this.DentinationService.getOneDentination(this.identifiant).subscribe(
      (response) => {
        this.destination = response;
        return this.destination;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private DentinationService: DentinationService
  ) {}

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.destinationSelect();
  }
}
