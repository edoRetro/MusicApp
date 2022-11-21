import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  //Single chat data
  private chatRef: AngularFirestoreDocument<any>;
  chatData: Observable<any>;

  //All user chats
  private userChatsRef: AngularFirestoreCollection<any>;
  userChatsData: Observable<any>;

  //Chat messages
  private chatMessagesRef: AngularFirestoreCollection<any>;
  chatMessagesData: Observable<any>;

  constructor(private afs: AngularFirestore) { }


  async getChatData(chatID: string) {    
    this.chatRef = this.afs.doc('chats/' + chatID);
    this.chatData = this.chatRef.valueChanges();
    return this.chatData;
  }

  async getChatsByUser(userID: string) {
    this.userChatsRef = this.afs.collection('chats', ref => ref.where('participantsID', 'array-contains', userID));    
    this.userChatsData = this.userChatsRef.valueChanges();
    return this.userChatsData;
  }

  getChatMessages(chatID: string) {
    this.chatMessagesRef = this.afs.collection('chats/' + chatID + '/messages', ref => ref.orderBy('sendDate'));
    this.chatMessagesData = this.chatMessagesRef.valueChanges();
    return this.chatMessagesData;
  }

  newChatMessage(chatID: string, message: string) {
    this.chatMessagesRef.add({
      authorID: 'llpop',      
      authorName: 'Eduardo',
      message: message,
      sendDate: new Date()
    })
  }
}
