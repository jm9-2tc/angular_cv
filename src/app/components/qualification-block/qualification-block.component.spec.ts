import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationBlockComponent } from './qualification-block.component';

describe('EducationalInstitutionBlockComponent', () => {
  let component: QualificationBlockComponent;
  let fixture: ComponentFixture<QualificationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualificationBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualificationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
