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

  data = {
    date: '',
    place: '',
    age: '',
    detail: '',
    source: '',
    type: ''
  };

  constructor(private http: HttpClient) { }

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
