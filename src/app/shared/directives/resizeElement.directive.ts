import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResizeElement]'
})
export class ResizeElementDirective {

  constructor(private el: ElementRef) { }
  listenerResize = () => { this.resizePhoto(); };
  ngOnInit() {
    this.listenerResize();
    window.addEventListener('resize', this.listenerResize);
  }

  ngOnDestroy(){
    window.removeEventListener('resize', this.listenerResize);
  }

  resizePhoto() {
    if (this.el.nativeElement.className === 'photo-slider-content') {
      this.el.nativeElement.style.width = this.el.nativeElement.parentElement.parentElement.getBoundingClientRect().width + 'px';
    } else {
      let width;
      if (window.innerHeight > window.innerWidth) {
        width = this.el.nativeElement.parentElement.parentElement.getBoundingClientRect().width / 2 + 'px';
      } else {
        width = this.el.nativeElement.parentElement.parentElement.getBoundingClientRect().width / 4 + 'px';
      }
      for (const elem of this.el.nativeElement.children) {
        elem.style.width = width;
      }
    }
  }

}
