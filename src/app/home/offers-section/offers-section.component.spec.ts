import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersSectionComponent } from './offers-section.component';

describe('OffersSectionComponent', () => {
  let component: OffersSectionComponent;
  let fixture: ComponentFixture<OffersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
