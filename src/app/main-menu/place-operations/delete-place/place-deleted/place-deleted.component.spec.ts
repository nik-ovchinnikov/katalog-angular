import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDeletedComponent } from './place-deleted.component';

describe('PlaceDeletedComponent', () => {
  let component: PlaceDeletedComponent;
  let fixture: ComponentFixture<PlaceDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceDeletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
