import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllItemsListComponent } from './show-all-items-list.component';

describe('ShowAllItemsListComponent', () => {
  let component: ShowAllItemsListComponent;
  let fixture: ComponentFixture<ShowAllItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
