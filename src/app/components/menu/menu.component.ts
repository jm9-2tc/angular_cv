import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements AfterViewInit {

  @ViewChild('selectedByDefault')
  private btnSelectedByDefaultRef!: ElementRef;

  private useEnglish: boolean;
  private lastClickedBtn?: HTMLElement;

  constructor(private translate: TranslateService) {
    translate.addLangs(['pl', 'en']);
    translate.use('en');
    this.useEnglish = true;
  }

  ngAfterViewInit(): void {
    this.selectSectionBtn(this.btnSelectedByDefaultRef.nativeElement);
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
