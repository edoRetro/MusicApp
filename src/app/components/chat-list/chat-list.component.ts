import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {

  chats: Observable<any[]>;  

  constructor(firestore: AngularFirestore) {
    this.chats = firestore.collection('chat-list').valueChanges();
  }

  ngOnInit() {}

}