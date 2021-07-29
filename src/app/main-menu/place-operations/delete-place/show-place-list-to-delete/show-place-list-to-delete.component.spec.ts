import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlaceListToDeleteComponent } from './show-place-list-to-delete.component';

describe('ShowPlaceListToDeleteComponent', () => {
  let component: ShowPlaceListToDeleteComponent;
  let fixture: ComponentFixture<ShowPlaceListToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlaceListToDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlaceListToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
