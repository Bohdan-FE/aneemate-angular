import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenIslandsComponent } from './hidden-islands.component';

describe('HiddenIslandsComponent', () => {
  let component: HiddenIslandsComponent;
  let fixture: ComponentFixture<HiddenIslandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenIslandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenIslandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
