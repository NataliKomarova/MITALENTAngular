import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appWindowScroll]'
})
export class WindowScrollDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    //const element: ElementRef = this.el;
   window.addEventListener('scroll', () => { this.scroll(); }, true);
  }

  scroll(): void {
    if (window.pageYOffset === 0) {
      this.el.nativeElement.classList.remove('header-hide');
    } else {
      this.el.nativeElement.classList.add('header-hide');
    }
  }
}
