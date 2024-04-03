import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-site-about',
  standalone: false,
  templateUrl: './site-about.component.html',
  styleUrl: './site-about.component.scss'
})
export class SiteAboutComponent implements OnInit {
  knownTechnologies = [];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.getExperience();
    this.translate.onLangChange.subscribe(() => this.getExperience());
  }

  getExperience() {
    this.translate.get('experience').subscribe((experience) => this.knownTechnologies = experience);
  }
}
