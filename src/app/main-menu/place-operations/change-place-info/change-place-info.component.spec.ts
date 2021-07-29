import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlaceInfoComponent } from './change-place-info.component';

describe('ChangePlaceInfoComponent', () => {
  let component: ChangePlaceInfoComponent;
  let fixture: ComponentFixture<ChangePlaceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePlaceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePlaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
