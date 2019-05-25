import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  slides = [
    { id: 1, name: 'Derek Anderson', job: 'BRITISH COMEDIAN', video: '/assets/content/video_1.mp4', poster: '/assets/content/poster_1.jpg', title: 'ENQUIRE ABOUT DEREK' },
    { id: 2, name: 'Derek Anderson2', job: 'BRITISH COMEDIAN2', video: '/assets/content/video_2.mp4', poster: '/assets/content/poster_2.jpg', title: 'ENQUIRE ABOUT DEREK2' },
    { id: 3, name: 'Derek Anderson3', job: 'BRITISH COMEDIAN3', video: '/assets/content/video_3.mp4', poster: '/assets/content/poster_3.jpg', title: 'ENQUIRE ABOUT DEREK3' },
    { id: 4, name: 'Derek Anderson4', job: 'BRITISH COMEDIAN4', video: '/assets/content/video_4.mp4', poster: '/assets/content/poster_4.jpg', title: 'ENQUIRE ABOUT DEREK4' }
  ];
  slide: any;
  buttonClassPause = false;
  iconClassPlay = true;
  iconClassPause = false;
  disableLeftArrow = true;
  disableRightArrow = false;
  currentSlide = 0;
  controlActive: boolean[] = [true, false, false, false];

  constructor() { }

  ngOnInit() {
    this.slide = this.slides[0];
  }

  arrowDisable() {
    if (this.currentSlide <= 0) {
      this.disableLeftArrow = true;
    } else {
      this.disableLeftArrow = false;
    }
    if (this.currentSlide >= this.slides.length-1) {
      this.disableRightArrow = true;
    } else {
      this.disableRightArrow = false;
    }
  }

  videoAction() {
    if (!this.buttonClassPause) {
      this.videoPlayer.nativeElement.play();
      this.buttonClassPause = true;
      this.iconClassPlay = false;
      this.iconClassPause = true;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.buttonClassPause = false;
      this.iconClassPlay = true;
      this.iconClassPause = false;
    }
  }

  videoEnded() {
    this.buttonClassPause = false;
    this.iconClassPlay = true;
    this.iconClassPause = false;
  }

  doSlide(direction: number, isArrow: boolean) {
    this.controlActive[this.currentSlide] = false;
    this.currentSlide = isArrow ? this.currentSlide + direction : direction;
    this.controlActive[this.currentSlide] = true;
    this.slide = this.slides[this.currentSlide];
    this.arrowDisable();
    this.videoEnded();
  }

  // doSlideNum(direction: number) {
  //   this.controlActive[this.currentSlide] = false;
  //   this.currentSlide = direction;
  //   this.controlActive[this.currentSlide] = true;
  //   this.slide = this.slides[this.currentSlide];
  //   this.arrowDisable();
  //   this.videoEnded();
  // }

}
