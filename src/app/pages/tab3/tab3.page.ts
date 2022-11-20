import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  selectedlanguage: string = "nes";

  constructor(private router: Router,
              private userDataService: UserDataService,
              public auth: AngularFireAuth) {}

  ngOnInit() {
    this.loadUserData();
  }

  async loadUserData() {
    let userData = await this.userDataService.getUserData();
    console.log(userData);    
  }

  async signOut() {
    await this.auth.signOut();
    this.router.navigate(["/login"]);
  }

  // handleLenguageChange(ev) {
  //   this.currentFood = ev.target.value;
  // }

}
