import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTypeInfoComponent } from './change-type-info.component';

describe('ChangeTypeInfoComponent', () => {
  let component: ChangeTypeInfoComponent;
  let fixture: ComponentFixture<ChangeTypeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTypeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTypeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
