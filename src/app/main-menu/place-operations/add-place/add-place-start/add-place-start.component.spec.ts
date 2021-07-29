import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceStartComponent } from './add-place-start.component';

describe('AddPlaceStartComponent', () => {
  let component: AddPlaceStartComponent;
  let fixture: ComponentFixture<AddPlaceStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlaceStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
