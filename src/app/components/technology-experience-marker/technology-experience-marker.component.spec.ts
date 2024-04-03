import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyExperienceMarkerComponent } from './technology-experience-marker.component';

describe('TechnologyExperienceMarkerComponent', () => {
  let component: TechnologyExperienceMarkerComponent;
  let fixture: ComponentFixture<TechnologyExperienceMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyExperienceMarkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyExperienceMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
