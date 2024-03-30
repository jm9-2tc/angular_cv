import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) sentences!: string[];
}
