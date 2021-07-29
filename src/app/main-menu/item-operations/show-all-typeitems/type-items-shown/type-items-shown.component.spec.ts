import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeItemsShownComponent } from './type-items-shown.component';

describe('TypeItemsShownComponent', () => {
  let component: TypeItemsShownComponent;
  let fixture: ComponentFixture<TypeItemsShownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeItemsShownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeItemsShownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
