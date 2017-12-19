import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  url = 'http://localhost:3000/denuncias';

  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get(this.url)
    .subscribe(
      (res: any) => {
        this.data = res.data;
        console.log(this.data);
      },
      err => {
        console.log('error');
      }
    );
  }

}
