import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  identifiant: any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }

}
