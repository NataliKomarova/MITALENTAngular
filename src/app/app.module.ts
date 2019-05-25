import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { NewsPageModule } from './news-page/news-page.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { WindowScrollDirective } from './shared/directives/window-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    WindowScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ProfilePageModule,
    NewsPageModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
