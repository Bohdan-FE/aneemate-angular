import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpSectionComponent } from './ip-section.component';

describe('IpSectionComponent', () => {
  let component: IpSectionComponent;
  let fixture: ComponentFixture<IpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
