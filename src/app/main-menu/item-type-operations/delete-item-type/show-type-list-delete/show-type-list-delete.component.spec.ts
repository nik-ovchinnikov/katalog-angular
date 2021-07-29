import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTypeListDeleteComponent } from './show-type-list-delete.component';

describe('ShowTypeListDeleteComponent', () => {
  let component: ShowTypeListDeleteComponent;
  let fixture: ComponentFixture<ShowTypeListDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTypeListDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTypeListDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
