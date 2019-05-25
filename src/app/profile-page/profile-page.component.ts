import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profileItems: any[];
  currentPerson: any;
  itemData: any;
  defaultPhotoUrl = 'https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1';
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.profileItems = this.userService.getUserProfile();
    this.currentPerson = this.profileItems[0];
    this.itemData = this.userService.getClients();
    // this.userService.getUserProfile().subscribe(result => {
    //   console.log(result);
    //   this.profileItems = result.map(x => {
    //     return {
    //       id: x.id,
    //       name: x.name,
    //       job: x.username,
    //       photo: this.defaultPhotoUrl
    //     };
    //   });
    // });
  }

  changePerson(index){
    this.currentPerson = this.profileItems[index];
  }

}
