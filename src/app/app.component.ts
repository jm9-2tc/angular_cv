import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SiteAboutComponent } from "./components/site-about/site-about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatTabsModule, SiteAboutComponent]
})
export class AppComponent {
  title = 'angular-cv';
}
