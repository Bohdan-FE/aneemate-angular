import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCardsListComponent } from './ip-cards-list.component';

describe('IpCardsListComponent', () => {
  let component: IpCardsListComponent;
  let fixture: ComponentFixture<IpCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
