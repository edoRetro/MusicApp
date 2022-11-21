import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonNav } from '@ionic/angular';
import { ChatListComponent } from './chat-list.component';
import { ChatItemListComponent } from '../chat-item-list/chat-item-list.component';
import { ChatHistoryComponent } from '../chat-history/chat-history.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const routes: Routes = [
  {
    path: 'chats',
    component: ChatListComponent,    
  },
  {
    path: 'chatHistory/:chatID/:receiverName',
    component: ChatHistoryComponent,    
  },
  {
    path: '',
    redirectTo: '/chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
    RouterModule.forChild(routes)],
  declarations: [
    ChatListComponent,
    ChatItemListComponent,
    ChatHistoryComponent],  
  exports: [ChatListComponent],
})
export class ChatListComponentModule {}
