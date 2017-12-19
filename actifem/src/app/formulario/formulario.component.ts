import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  url = 'http://localhost:3000/denuncias';
  key = 'AIzaSyDaOk4Zg2VdW-Ci4RL-KSHE6kGzIopt5l0';

  data = {
    date: '',
    place: '',
    age: '',
    detail: '',
    source: '',
    type: '',
    lat: '',
    lng: ''
  };

  constructor(private http: HttpClient) { }

  getGeocode() {
    const place = this.data.place.split(' ').join('+');
    this.http
    .get(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' + place + '&key=' + this.key
    ).subscribe(
      (res: any) => {
        if (res.results[0].geometry.location.lat && res.results[0].geometry.location.lng) {
          this.data.lat = res.results[0].geometry.location.lat;
          this.data.lng = res.results[0].geometry.location.lng;
        }
      },
      err => {
        console.log('error');
      }
    );
  }

  submit() {
    this.http
    .post(this.url, this.data)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('error');
      }
    );
  }

  ngOnInit() {

  }

}
