import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  songs: Observable<any[]>;  

  constructor(firestore: AngularFirestore) {
    this.songs = firestore.collection('music').valueChanges();
  }

}
