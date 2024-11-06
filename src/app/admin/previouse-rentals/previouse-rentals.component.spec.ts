import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouseRentalsComponent } from './previouse-rentals.component';

describe('PreviouseRentalsComponent', () => {
  let component: PreviouseRentalsComponent;
  let fixture: ComponentFixture<PreviouseRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviouseRentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviouseRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
