import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../models/message.model';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrl: './send-message-form.component.scss'
})
export class SendMessageFormComponent {
  @Input() message!: Message;
  @Output() messageChange = new EventEmitter<Message>();

  allowSend = false;

  constructor (private constactService: ContactService) {}

  onSendBtnClicked() {
    if (!this.allowSend)
      return;
    this.constactService.sendMessage(this.message);
  }

  onClearBtnClicked() {
    this.message = { author: '', title: '', message: '' };
    this.onMessageUpdated();
  }

  onMessageUpdated() {
    this.allowSend = this.message.author.length > 0 && this.message.title.length > 0 && this.message.message.length > 0;
  }
}
