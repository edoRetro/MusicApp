import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  selectedlanguage: string = "nes";
  userData: Observable<any>;

  constructor(private router: Router,
              private userDataService: UserDataService,
              public auth: AngularFireAuth) {}

  ngOnInit() {
    this.loadUserData();
  }

  async loadUserData() {
    this.userData = await this.userDataService.getUserData();
  }

  async signOut() {
    await this.auth.signOut();
    this.router.navigate(["/login"]);
  }

}
