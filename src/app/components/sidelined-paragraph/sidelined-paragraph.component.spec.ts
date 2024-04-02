import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelinedParagraphComponent } from './sidelined-paragraph.component';

describe('SidelinedParagraphComponent', () => {
  let component: SidelinedParagraphComponent;
  let fixture: ComponentFixture<SidelinedParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidelinedParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidelinedParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
