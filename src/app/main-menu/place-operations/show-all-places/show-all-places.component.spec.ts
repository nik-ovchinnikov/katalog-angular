import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPlacesComponent } from './show-all-places.component';

describe('ShowAllPlacesComponent', () => {
  let component: ShowAllPlacesComponent;
  let fixture: ComponentFixture<ShowAllPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
