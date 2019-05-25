import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import * as carouselUtil from '../../shared/scripts/carousel';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss']
})
export class SecondScreenComponent implements OnInit {

  itemData = [{ "id": 1, "name": "Вася", "job": "QA", "photo": "https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1" }, { "id": 2, "name": "Петя", "job": "Developer", "photo": "https://pmctvline2.files.wordpress.com/2018/10/game-of-thrones-peter-dinklage-tyrion-death-season-8-interview.jpg?w=620" }, { "id": 3, "name": "Вова", "job": "Senior Developer", "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaeIWOmi62oncorhSKDzoBPIA7mF1QWUqgnFXKRTbaGHAsp8fUA" }, { "id": 4, "name": "Арчибальд", "job": "QA Lead", "photo": "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/05/game-of-thrones-season-1-recap.jpg?itok=ZwQDxPFR" }];
  @ViewChild('photoBlock') photoBlock: ElementRef;

  tabsData = [{"tabName": "Profile.", "preview": "Derek Anderson is a leading actor, comedian and writer.", "award": "British Award 2020", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est volaborum. Sed ut perspiciatis unde omnis iste natus error sit vo- luptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam." },
  {"tabName": "Press.", "preview": "On press Derek Anderson is a leading comedian, actor and writer.", "award": "British Award 2018", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
  {"tabName": "Awards.", "preview": "Awards of Derek Anderson is a million dollars.", "award": "British Award 2019", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est volaborum. Sed ut perspiciatis unde omnis iste natus error." },
  {"tabName": "Creadits.", "preview": "Don't know about Derek Anderson Creadits.", "award": "British Award 2021", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " }]
 
  tabsTitle: string[] = ['Profile', 'Press', 'Awards', 'Creadits'];

  secondScreenPosition = 0;
  prevSecondScreenPhoto = 0;
  controlActive: boolean[] = [true, false, false, false];
  startMouseXCoordinate = 0;

  constructor() { }

  ngOnInit() {
  }


  photoCarouselAction(currentPhoto: number) {
    this.secondScreenPosition = carouselUtil.newPositionCalc(currentPhoto, this.prevSecondScreenPhoto, 1, 444.031, this.photoBlock.nativeElement, this.secondScreenPosition, 4);
    this.controlActive[this.prevSecondScreenPhoto] = false;
    this.controlActive[currentPhoto] = true;
    this.prevSecondScreenPhoto = currentPhoto;
  }

  carouselMouseDown(event) {
    this.startMouseXCoordinate = carouselUtil.carouselMouseDown(event);
  }

  carouselMouseUp(event){
    carouselUtil.carouselMouseUp(event, this.startMouseXCoordinate, this.prevSecondScreenPhoto, this.itemData.length, (value)=> {this.photoCarouselAction(value)});
  }

}
