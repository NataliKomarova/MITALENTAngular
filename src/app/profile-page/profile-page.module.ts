import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { ForthScreenComponent } from './forth-screen/forth-screen.component';
import { ResizeElementDirective } from '../shared/directives/resizeElement.directive';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ProfilePageComponent,
		ProfileItemComponent,
		FirstScreenComponent,
		SecondScreenComponent,
		ThirdScreenComponent,
		ForthScreenComponent,
		ResizeElementDirective
	],
	exports: [
		ProfilePageComponent,
		ProfileItemComponent,
		FirstScreenComponent,
		SecondScreenComponent,
		ThirdScreenComponent,
		ForthScreenComponent
	]
})
export class ProfilePageModule { }
