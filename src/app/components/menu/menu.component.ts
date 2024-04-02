import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private useEnglish;

  constructor(private translate: TranslateService) {
    translate.addLangs(['pl', 'en']);
    translate.use('en');
    this.useEnglish = true;
  }

  switchLanguage() {
    this.useEnglish = !this.useEnglish;
    this.translate.use(this.useEnglish ? 'en' : 'pl');
  }
}
