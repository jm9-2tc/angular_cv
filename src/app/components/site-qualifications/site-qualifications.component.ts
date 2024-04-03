import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-site-qualifications',
  templateUrl: './site-qualifications.component.html',
  styleUrl: './site-qualifications.component.scss',
})
export class SiteQualificationsComponent implements OnInit {
  eduInstitutions = []
  certificates = []

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.getQualifications();
    this.translate.onLangChange.subscribe(() => this.getQualifications());
  }

  getQualifications() {
    this.translate.get('education').subscribe((institutions) => this.eduInstitutions = institutions);
    this.translate.get('certificates').subscribe((certs) => this.certificates = certs);
  }
}
