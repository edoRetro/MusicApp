import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {

  chats: Observable<any[]>;  

  constructor(private userDataService: UserDataService) {}

  async ngOnInit() {
    this.chats = await this.userDataService.getUserChatsPreview();
  }

}