import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.scss']
})
export class DenunciaComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }
}
