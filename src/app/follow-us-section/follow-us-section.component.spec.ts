import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUsSectionComponent } from './follow-us-section.component';

describe('FollowUsSectionComponent', () => {
  let component: FollowUsSectionComponent;
  let fixture: ComponentFixture<FollowUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
