import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItemDeleteListComponent } from './show-item-delete-list.component';

describe('ShowItemDeleteListComponent', () => {
  let component: ShowItemDeleteListComponent;
  let fixture: ComponentFixture<ShowItemDeleteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowItemDeleteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowItemDeleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
