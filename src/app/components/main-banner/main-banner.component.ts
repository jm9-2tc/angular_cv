import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {
  @Input() name: string
  @Input() sentences: string[]

  constructor () {}
}
