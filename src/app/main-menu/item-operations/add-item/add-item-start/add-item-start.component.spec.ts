import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemStartComponent } from './add-item-start.component';

describe('AddItemStartComponent', () => {
  let component: AddItemStartComponent;
  let fixture: ComponentFixture<AddItemStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
