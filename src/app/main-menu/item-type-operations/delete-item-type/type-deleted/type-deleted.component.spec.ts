import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeletedComponent } from './type-deleted.component';

describe('TypeDeletedComponent', () => {
  let component: TypeDeletedComponent;
  let fixture: ComponentFixture<TypeDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
