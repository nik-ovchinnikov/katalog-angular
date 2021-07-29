import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosePlaceComponent } from './chose-place.component';

describe('ChosePlaceComponent', () => {
  let component: ChosePlaceComponent;
  let fixture: ComponentFixture<ChosePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosePlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
