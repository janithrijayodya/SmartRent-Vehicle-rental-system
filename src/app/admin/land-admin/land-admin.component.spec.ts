import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAdminComponent } from './land-admin.component';

describe('LandAdminComponent', () => {
  let component: LandAdminComponent;
  let fixture: ComponentFixture<LandAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
