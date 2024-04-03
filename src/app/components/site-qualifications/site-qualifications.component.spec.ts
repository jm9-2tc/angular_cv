import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteQualificationsComponent } from './site-qualifications.component';

describe('SiteQualificationsComponent', () => {
  let component: SiteQualificationsComponent;
  let fixture: ComponentFixture<SiteQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteQualificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
