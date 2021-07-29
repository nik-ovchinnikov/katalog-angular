import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChangedComponent } from './item-changed.component';

describe('ItemChangedComponent', () => {
  let component: ItemChangedComponent;
  let fixture: ComponentFixture<ItemChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
