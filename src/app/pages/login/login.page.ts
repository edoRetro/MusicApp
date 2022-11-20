import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',  
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm = {
    user: "",
    pass: ""
  };

  constructor(private auth: AngularFireAuth,
              private loadingCtrl: LoadingController,
              private router: Router) {}

  async login() {    
    const loading = await this.loadingCtrl.create({
      message: 'Login in...'      
    });

    loading.present();

    let response = await this.auth.signInWithEmailAndPassword(this.loginForm.user, this.loginForm.pass);
    loading.dismiss();
    this.router.navigate(["/main"]);    
  }

  logout() {
    this.auth.signOut();
  }  

}
