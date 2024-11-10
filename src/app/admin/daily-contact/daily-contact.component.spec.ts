import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyContactComponent } from './daily-contact.component';

describe('DailyContactComponent', () => {
  let component: DailyContactComponent;
  let fixture: ComponentFixture<DailyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
