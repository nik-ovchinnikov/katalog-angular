import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlaceListComponent } from './show-place-list.component';

describe('ShowPlaceListComponent', () => {
  let component: ShowPlaceListComponent;
  let fixture: ComponentFixture<ShowPlaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlaceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
