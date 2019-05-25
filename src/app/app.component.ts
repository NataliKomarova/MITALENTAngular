import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MITALENTAngular';
  headerHide = false;

   ngOnInit() {
    //window.addEventListener('scroll', () => {this.scroll() }, true);
  }

  scroll(): void {
    if (window.pageYOffset === 0) {
      this.headerHide = false;
      console.log(window.pageYOffset);
    } else {
      this.headerHide = true;
      console.log('scrolling');
    }
  }
}
