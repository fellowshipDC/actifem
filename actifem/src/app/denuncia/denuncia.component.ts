import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.scss']
})
export class DenunciaComponent implements OnInit {

  @Input()
  no: string;
  @Input()
  promise: string;
  @Input()
  author: string;
  @Input()
  position: string;
  @Input()
  government: string;
  @Input()
  ispublic: string;
  @Input()
  isprivate: string;
  @Input()
  civil: string;
  @Input()
  resource: string;

  constructor() { }

  ngOnInit() {
  }
}
