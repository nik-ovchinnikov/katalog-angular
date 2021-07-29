import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChangedComponent } from './type-changed.component';

describe('TypeChangedComponent', () => {
  let component: TypeChangedComponent;
  let fixture: ComponentFixture<TypeChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
