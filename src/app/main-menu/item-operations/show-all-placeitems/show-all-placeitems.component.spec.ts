import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPlaceitemsComponent } from './show-all-placeitems.component';

describe('ShowAllPlaceitemsComponent', () => {
  let component: ShowAllPlaceitemsComponent;
  let fixture: ComponentFixture<ShowAllPlaceitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPlaceitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllPlaceitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
