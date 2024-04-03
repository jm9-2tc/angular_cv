import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-info-block',
  templateUrl: './project-info-block.component.html',
  styleUrl: './project-info-block.component.scss'
})
export class ProjectInfoBlockComponent {
  @Input() project!: Project;
}
