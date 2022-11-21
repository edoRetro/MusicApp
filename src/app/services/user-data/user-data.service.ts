import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDataRef: AngularFirestoreDocument<any>;
  userData: Observable<any>;

  private userDataChatsRef: AngularFirestoreCollection<any>;
  userDataChats: Observable<any>;

  constructor(private afs: AngularFirestore,
              private auth: AngularFireAuth) { }

  async getUserData() {        
    let userUID = (await this.auth.currentUser).uid;
    this.userDataRef = this.afs.doc('user-data/' + userUID);
    this.userData = this.userDataRef.valueChanges();
    return this.userData;    
  }

  async getUserChatsPreview() {    
    let userUID = (await this.auth.currentUser).uid;
    this.userDataChatsRef = this.afs.collection('user-data/' + userUID + '/chats');
    this.userDataChats = this.userDataChatsRef.valueChanges({idField: 'chatID'});
    return this.userDataChats;    
  }

  // async newChatMessage(newMessages: any[]) {
  //   const result = this.userDataChatsRef.doc("CbgdQatNeZ5yqA9QEaiR").update({
  //     messages: newMessages
  //   });
  //   return result;
  // }
}
