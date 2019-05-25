import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { ForthScreenComponent } from './forth-screen/forth-screen.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ProfilePageComponent, ProfileItemComponent, FirstScreenComponent, SecondScreenComponent, ThirdScreenComponent, ForthScreenComponent],
	exports: [ProfilePageComponent, ProfileItemComponent, FirstScreenComponent, SecondScreenComponent, ThirdScreenComponent, ForthScreenComponent]
})
export class ProfilePageModule { }
