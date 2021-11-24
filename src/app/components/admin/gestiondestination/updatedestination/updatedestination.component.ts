import { Component, Input, OnInit } from '@angular/core';
import { DentinationService } from 'src/app/services/dentination.service';
import { Dentination } from 'src/app/models/dentination';

@Component({
  selector: 'app-updatedestination',
  templateUrl: './updatedestination.component.html',
  styleUrls: ['./updatedestination.component.css']
})
export class UpdatedestinationComponent implements OnInit {
  @Input() city: Dentination;

  

  constructor(private DentinationService: DentinationService) { }

  ngOnInit(): void {

  }

}
