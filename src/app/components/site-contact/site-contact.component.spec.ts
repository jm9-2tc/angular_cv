import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContactComponent } from './site-contact.component';

describe('SiteContactComponent', () => {
  let component: SiteContactComponent;
  let fixture: ComponentFixture<SiteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
