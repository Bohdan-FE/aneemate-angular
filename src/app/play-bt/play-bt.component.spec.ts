import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBtComponent } from './play-bt.component';

describe('PlayBtComponent', () => {
  let component: PlayBtComponent;
  let fixture: ComponentFixture<PlayBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayBtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
