import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {path: '', component: ProfilePageComponent},
  {path: 'news', component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
