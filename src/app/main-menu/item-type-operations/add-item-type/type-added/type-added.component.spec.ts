import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAddedComponent } from './type-added.component';

describe('TypeAddedComponent', () => {
  let component: TypeAddedComponent;
  let fixture: ComponentFixture<TypeAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
