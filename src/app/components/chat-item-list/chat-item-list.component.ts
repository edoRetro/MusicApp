import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item-list',
  templateUrl: './chat-item-list.component.html',
  styleUrls: ['./chat-item-list.component.scss'],
})
export class ChatItemListComponent implements OnInit {

  @Input() avatar = '';
  @Input() contactName = '';

  constructor() { }

  ngOnInit() {}
}
