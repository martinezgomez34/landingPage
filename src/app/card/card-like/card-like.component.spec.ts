import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLikeComponent } from './card-like.component';

describe('CardLikeComponent', () => {
  let component: CardLikeComponent;
  let fixture: ComponentFixture<CardLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
