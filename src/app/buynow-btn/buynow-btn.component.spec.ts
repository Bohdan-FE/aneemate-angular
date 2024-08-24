import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowBtnComponent } from './buynow-btn.component';

describe('BuynowBtnComponent', () => {
  let component: BuynowBtnComponent;
  let fixture: ComponentFixture<BuynowBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuynowBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuynowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
