import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTypeitemsComponent } from './show-all-typeitems.component';

describe('ShowAllTypeitemsComponent', () => {
  let component: ShowAllTypeitemsComponent;
  let fixture: ComponentFixture<ShowAllTypeitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllTypeitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTypeitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
