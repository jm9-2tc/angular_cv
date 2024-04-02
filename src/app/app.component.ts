import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SiteAboutComponent } from "./components/site-about/site-about.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TranslateService, } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-cv';
  useDarkMode = false;

  constructor(private translate: TranslateService) {
    translate.get('aboutMe.name').forEach(t => console.log('TRANSLATION: ' + t))
  }
}
