import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStoryComponent } from './the-story.component';

describe('TheStoryComponent', () => {
  let component: TheStoryComponent;
  let fixture: ComponentFixture<TheStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
