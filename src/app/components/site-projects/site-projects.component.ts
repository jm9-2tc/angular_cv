import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-site-projects',
  templateUrl: './site-projects.component.html',
  styleUrl: './site-projects.component.scss'
})
export class SiteProjectsComponent implements OnInit {
  projects = []

  constructor (private translate: TranslateService) {}

  ngOnInit(): void {
    this.getProjects();
    this.translate.onLangChange.subscribe(() => this.getProjects());
  }

  getProjects() {
    this.translate.get('projects').subscribe((projects) => this.projects = projects);
  }
}
