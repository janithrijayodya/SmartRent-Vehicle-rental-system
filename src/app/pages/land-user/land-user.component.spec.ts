import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandUserComponent } from './land-user.component';

describe('LandUserComponent', () => {
  let component: LandUserComponent;
  let fixture: ComponentFixture<LandUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
