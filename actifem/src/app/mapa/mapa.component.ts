import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  url = 'http://localhost:3000/denuncias';
  data;

  constructor(private http: HttpClient) { }

  initMap() {
    var cdmx = { lat: 19.4286973, lng: -99.156051 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: cdmx
    });

    return map;
  }

  addMarker(map, lat, lng) {
    var location = { lat: lat, lng: lng };
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    marker.addListener('click', () => {
      map.setCenter(marker.getPosition());
      map.setZoom(15);
    });
  }

  ngOnInit() {
    this.http
    .get(this.url)
    .subscribe(
      (res: any) => {
        this.data = res.data;
        const map = this.initMap();
        this.data.map(denuncia => {
          this.addMarker(map, parseFloat(denuncia.lat), parseFloat(denuncia.lng));
        });
      },
      err => {
        console.log('error');
      }
    );
  }

}
