import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../models/message.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-site-contact',
  templateUrl: './site-contact.component.html',
  styleUrl: './site-contact.component.scss'
})
export class SiteContactComponent {
  message: Message;

  constructor (private translate: TranslateService) {
    this.message = { author: '', title: '', message: '' };
  }

  sendEmail() {
    this.translate.get('contactInfo.email').subscribe((email) => {
      const tempLink = document.createElement('a');
      tempLink.href = `mailto:${ email }?subject=${ this.message.title }&body=${ this.message.message }`;
      tempLink.target = '_blank';
      tempLink.click();
    });
  }
}
