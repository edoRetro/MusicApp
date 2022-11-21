import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat/chat.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss'],
})
export class ChatHistoryComponent implements OnInit, OnDestroy {

  inputMessage: string;

  messages: Observable<any[]>;  
  receiverName: string;

  chatID: string;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private chatService: ChatService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.chatID = params['chatID'];
      this.receiverName = params['receiverName'];
      console.log(this.chatID);

      this.messages = this.chatService.getChatMessages(this.chatID);          
   });
  }

  async sendMessage() {            
    const result = await this.chatService.newChatMessage(this.chatID, this.inputMessage)
    console.log(result);    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
