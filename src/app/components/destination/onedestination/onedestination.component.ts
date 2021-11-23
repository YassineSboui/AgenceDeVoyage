import { Component, Input, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
@Component({
  selector: 'app-onedestination',
  templateUrl: './onedestination.component.html',
  styleUrls: ['./onedestination.component.css']
})
export class OnedestinationComponent implements OnInit {
  @Input() destination: Dentination;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
