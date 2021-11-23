import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;
[39.8282, -98.5795];
var corner1 = L.latLng(52.24664, -61.850363),
  corner2 = L.latLng(23.853691, -133.968797),
  bounds = L.latLngBounds(corner1, corner2);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  destinations: Dentination[] = [];
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });
    this.map.setView([39.8282, -98.5795]);
    this.map.setMaxBounds(bounds);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 5,
        minZoom: 2,
      }
    );

    tiles.addTo(this.map);
    this.DentinationService.getDentination().subscribe(
      (response) => {
        response.map((element: Dentination) =>
          L.marker([element.latitude, element.longitude])
            .addTo(this.map)
            .bindPopup(
              '<img  src=' +
                element.image +
                ' alt="Card image cap"  height="50" >'
            ), 
          
        )
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private DentinationService: DentinationService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
