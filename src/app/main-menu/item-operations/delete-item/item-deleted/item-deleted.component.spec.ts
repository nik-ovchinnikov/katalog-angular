import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeletedComponent } from './item-deleted.component';

describe('ItemDeletedComponent', () => {
  let component: ItemDeletedComponent;
  let fixture: ComponentFixture<ItemDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDeletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
