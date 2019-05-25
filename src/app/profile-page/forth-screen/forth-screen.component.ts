import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as carouselUtil from '../../shared/scripts/carousel';

@Component({
  selector: 'app-forth-screen',
  templateUrl: './forth-screen.component.html',
  styleUrls: ['./forth-screen.component.scss']
})
export class ForthScreenComponent implements OnInit {

  forthScreenPosition = 0;
  prevForthScreenPhoto = 0;
  controlActivePhotoBlock: boolean[] = [true, false];
  controlActive: boolean[] = [true, false, false, false];
  startMouseXCoordinate = 0;

  @ViewChild('photoBlock') photoBlock: ElementRef;
  @ViewChild('photoBlockMob1') photoBlockMob1: ElementRef;
  @ViewChild('photoBlockMob2') photoBlockMob2: ElementRef;

  @Input() itemData: any;

  constructor() { }

  ngOnInit() {
  }

  photoCarouselAction(currentPhoto: number) {
    if (window.innerHeight > window.innerWidth) {
      const width = this.photoBlockMob1.nativeElement.children[0].children[0].getBoundingClientRect().width;
      carouselUtil.newPositionCalc(currentPhoto, this.prevForthScreenPhoto, 2, width, this.photoBlockMob1.nativeElement, this.forthScreenPosition, 8);
      this.forthScreenPosition = carouselUtil.newPositionCalc(currentPhoto, this.prevForthScreenPhoto, 2, width, this.photoBlockMob2.nativeElement, this.forthScreenPosition, 8);
    } else {
      const width = this.photoBlock.nativeElement.children[0].children[0].getBoundingClientRect().width;
      this.forthScreenPosition = carouselUtil.newPositionCalc(currentPhoto, this.prevForthScreenPhoto, 4, width, this.photoBlock.nativeElement, this.forthScreenPosition, 16);
    }
    this.controlActive[this.prevForthScreenPhoto] = false;
    this.controlActive[currentPhoto] = true;
    this.prevForthScreenPhoto = currentPhoto;
  }

  carouselMouseDown(event) {
    this.startMouseXCoordinate = carouselUtil.carouselMouseDown(event);
  }

  carouselMouseUp(event) {
    carouselUtil.carouselMouseUp(event, this.startMouseXCoordinate, this.prevForthScreenPhoto, 4, (value) => { this.photoCarouselAction(value) });
  }

}
