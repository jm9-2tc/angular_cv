import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoBlockComponent } from './project-info-block.component';

describe('ProjectInfoBlockComponent', () => {
  let component: ProjectInfoBlockComponent;
  let fixture: ComponentFixture<ProjectInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInfoBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
