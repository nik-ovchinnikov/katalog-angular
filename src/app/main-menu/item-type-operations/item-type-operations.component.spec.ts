import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeOperationsComponent } from './item-type-operations.component';

describe('ItemTypeOperationsComponent', () => {
  let component: ItemTypeOperationsComponent;
  let fixture: ComponentFixture<ItemTypeOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypeOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
