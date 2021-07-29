import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeChosenItemComponent } from './change-chosen-item.component';

describe('ChangeChosenItemComponent', () => {
  let component: ChangeChosenItemComponent;
  let fixture: ComponentFixture<ChangeChosenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeChosenItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeChosenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
