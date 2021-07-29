import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTypeListComponent } from './show-type-list.component';

describe('ShowTypeListComponent', () => {
  let component: ShowTypeListComponent;
  let fixture: ComponentFixture<ShowTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
