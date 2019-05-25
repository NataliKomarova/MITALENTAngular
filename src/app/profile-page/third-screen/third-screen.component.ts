import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-third-screen',
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.scss']
})
export class ThirdScreenComponent implements OnInit {

  @Input() currentPerson: any;

  constructor() { }

  ngOnInit() {
  }

}
