import { Component } from '@angular/core';
import cv from '../../data/cv.json';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {
  cv = cv
}
