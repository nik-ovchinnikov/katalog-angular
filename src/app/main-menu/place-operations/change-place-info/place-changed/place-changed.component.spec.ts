import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceChangedComponent } from './place-changed.component';

describe('PlaceChangedComponent', () => {
  let component: PlaceChangedComponent;
  let fixture: ComponentFixture<PlaceChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
