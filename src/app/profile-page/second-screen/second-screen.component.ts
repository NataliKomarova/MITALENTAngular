import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as carouselUtil from '../../shared/scripts/carousel';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss']
})
export class SecondScreenComponent implements OnInit {

  @Input() currentPerson: any;

  @ViewChild('photoBlock') photoBlock: ElementRef;

  tabsTitle: string[] = ['Profile', 'Press', 'Awards', 'Creadits'];

  secondScreenPosition = 0;
  prevSecondScreenPhoto = 0;
  controlActive: boolean[] = [true, false, false, false];
  startMouseXCoordinate = 0;

  constructor() { }

  ngOnInit() {
  }


  photoCarouselAction(currentPhoto: number) {
    const width = this.photoBlock.nativeElement.children[0].getBoundingClientRect().width;
    this.secondScreenPosition = carouselUtil.newPositionCalc(currentPhoto, this.prevSecondScreenPhoto, 1, width, this.photoBlock.nativeElement, this.secondScreenPosition, 4);
    this.controlActive[this.prevSecondScreenPhoto] = false;
    this.controlActive[currentPhoto] = true;
    this.prevSecondScreenPhoto = currentPhoto;
  }

  carouselMouseDown(event) {
    this.startMouseXCoordinate = carouselUtil.carouselMouseDown(event);
  }

  carouselMouseUp(event){
    carouselUtil.carouselMouseUp(event, this.startMouseXCoordinate, this.prevSecondScreenPhoto, this.currentPerson.about.data.length, (value)=> {this.screenAction(value)});
  }

  tabAction(tabNum: number){
    this.controlActive[this.prevSecondScreenPhoto] = false;
    this.controlActive[tabNum] = true;
    //photoCarouselAction(tabNum);
  }

  screenAction(num: number){
    this.tabAction(num);
    this.photoCarouselAction(num);
  }

}
