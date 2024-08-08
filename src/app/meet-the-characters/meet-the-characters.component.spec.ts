import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheCharactersComponent } from './meet-the-characters.component';

describe('MeetTheCharactersComponent', () => {
  let component: MeetTheCharactersComponent;
  let fixture: ComponentFixture<MeetTheCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetTheCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTheCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
