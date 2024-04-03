import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements AfterViewInit {

  @ViewChildren(RouterLink, { read: ElementRef })
  private sectionBtns!: QueryList<ElementRef>;

  private useEnglish: boolean;
  private lastClickedBtn?: HTMLElement;

  sections = [
    {translationId: 'staticText.menuSections.about', link: '/'},
    {translationId: 'staticText.menuSections.qualifications', link: '/qualifications'},
    {translationId: 'staticText.menuSections.projects', link: '/projects'},
    {translationId: 'staticText.menuSections.contact', link: '/contact'},
  ]

  constructor(private translate: TranslateService, private location: Location) {
    translate.addLangs(['pl', 'en']);
    translate.use('en');
    this.useEnglish = true;
  }

  ngAfterViewInit(): void {
    const currentRoute = this.location.path();
    let i = 0;

    this.sectionBtns.forEach((btnRef) => {
      const btn = btnRef.nativeElement;
      const href = btn.attributes.getNamedItem('ng-reflect-router-link')?.value;
      if (href == currentRoute) {
        this.selectSectionBtn(btn);
      }
    });
  }

  switchLanguage() {
    this.useEnglish = !this.useEnglish;
    this.translate.use(this.useEnglish ? 'en' : 'pl');
  }

  onSectionBtnClicked(event: Event) {
    this.selectSectionBtn(event.target as HTMLElement);
  }

  selectSectionBtn(btn: HTMLElement) {
    if (this.lastClickedBtn) {
      this.lastClickedBtn.classList.remove('selected');
    }
    this.lastClickedBtn = btn;
    this.lastClickedBtn.classList.add('selected');
  }
}
