import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInterativoComponent } from './card-interativo.component';

describe('CardInterativoComponent', () => {
  let component: CardInterativoComponent;
  let fixture: ComponentFixture<CardInterativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardInterativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInterativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
