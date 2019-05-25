import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss']
})
export class ProfileItemComponent implements OnInit {

  item = { "id": 1, "name": "Вася", "job": "QA", "photo": "https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1" };


  @Input() itemData: any;

  constructor() { }

  ngOnInit() {
  }

  jobClock(){
    alert(this.itemData.job + ' was clicked');
  }



  

}
