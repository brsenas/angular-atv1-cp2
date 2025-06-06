import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSwitchComponent } from './month-switch.component';

describe('MonthSwitchComponent', () => {
  let component: MonthSwitchComponent;
  let fixture: ComponentFixture<MonthSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
