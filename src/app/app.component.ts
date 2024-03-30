import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SiteAboutComponent } from "./components/site-about/site-about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatTabsModule, MatIconModule, MatButtonModule, SiteAboutComponent]
})
export class AppComponent {
  title = 'angular-cv';
  useDarkMode = false;
}
