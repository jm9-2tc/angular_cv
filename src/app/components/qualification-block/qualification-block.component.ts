import { Component, Input } from '@angular/core';
import { EducationalInstitution } from '../../models/educational-institution.model';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-qualification-block',
  templateUrl: './qualification-block.component.html',
  styleUrl: './qualification-block.component.scss'
})
export class QualificationBlockComponent {
  @Input() institution?: EducationalInstitution;
  @Input() cert?: Certificate
}
