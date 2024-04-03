import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteProjectsComponent } from './site-projects.component';

describe('SiteProjectsComponent', () => {
  let component: SiteProjectsComponent;
  let fixture: ComponentFixture<SiteProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
