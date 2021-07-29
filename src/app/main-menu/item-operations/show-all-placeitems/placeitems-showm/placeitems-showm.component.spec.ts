import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceitemsShowmComponent } from './placeitems-showm.component';

describe('PlaceitemsShowmComponent', () => {
  let component: PlaceitemsShowmComponent;
  let fixture: ComponentFixture<PlaceitemsShowmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceitemsShowmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceitemsShowmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
