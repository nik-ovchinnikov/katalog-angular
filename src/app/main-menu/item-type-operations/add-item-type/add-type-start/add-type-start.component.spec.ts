import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeStartComponent } from './add-type-start.component';

describe('AddTypeStartComponent', () => {
  let component: AddTypeStartComponent;
  let fixture: ComponentFixture<AddTypeStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
