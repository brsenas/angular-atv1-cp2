import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionItensComponent } from './promotion-itens.component';

describe('PromotionItensComponent', () => {
  let component: PromotionItensComponent;
  let fixture: ComponentFixture<PromotionItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
