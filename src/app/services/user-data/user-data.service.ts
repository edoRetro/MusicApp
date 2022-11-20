import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDataDoc: AngularFirestoreDocument<any>;
  userData: Observable<any>;

  constructor(private afs: AngularFirestore,
              private auth: AngularFireAuth) { }

  async getUserData() {        
    let user: firebase.User = await this.auth.currentUser;    
    this.userDataDoc = this.afs.doc('user-data/' + user.uid);
    this.userData = this.userDataDoc.valueChanges();
    return this.userData;    
  }
}
