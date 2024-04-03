import { Component, Input } from '@angular/core';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology-experience-marker',
  templateUrl: './technology-experience-marker.component.html',
  styleUrl: './technology-experience-marker.component.scss'
})
export class TechnologyExperienceMarkerComponent {
  @Input() technology!: Technology

  getProgressBarColorFromValue(value: number): string {
    if (value < 33) {
      return '#4CAF50'
    } else if (value < 67) {
      return '#FFD740'
    } else {
      return '#FF5252'
    }
  }
}
