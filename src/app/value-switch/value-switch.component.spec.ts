import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSwitchComponent } from './value-switch.component';

describe('ValueSwitchComponent', () => {
  let component: ValueSwitchComponent;
  let fixture: ComponentFixture<ValueSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
