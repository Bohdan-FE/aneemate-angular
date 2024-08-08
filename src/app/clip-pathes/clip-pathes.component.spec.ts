import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipPathesComponent } from './clip-pathes.component';

describe('ClipPathesComponent', () => {
  let component: ClipPathesComponent;
  let fixture: ComponentFixture<ClipPathesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipPathesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipPathesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
