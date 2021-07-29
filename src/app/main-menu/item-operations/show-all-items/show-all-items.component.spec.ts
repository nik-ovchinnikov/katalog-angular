import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllItemsComponent } from './show-all-items.component';

describe('ShowAllItemsComponent', () => {
  let component: ShowAllItemsComponent;
  let fixture: ComponentFixture<ShowAllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
