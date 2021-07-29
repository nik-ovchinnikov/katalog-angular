import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAddedComponent } from './place-added.component';

describe('PlaceAddedComponent', () => {
  let component: PlaceAddedComponent;
  let fixture: ComponentFixture<PlaceAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
