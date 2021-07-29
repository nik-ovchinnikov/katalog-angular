import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeItemTypeComponent } from './change-item-type.component';

describe('ChangeItemTypeComponent', () => {
  let component: ChangeItemTypeComponent;
  let fixture: ComponentFixture<ChangeItemTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeItemTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeItemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
