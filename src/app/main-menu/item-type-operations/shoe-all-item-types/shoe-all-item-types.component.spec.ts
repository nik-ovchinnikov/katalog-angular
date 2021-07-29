import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeAllItemTypesComponent } from './shoe-all-item-types.component';

describe('ShoeAllItemTypesComponent', () => {
  let component: ShoeAllItemTypesComponent;
  let fixture: ComponentFixture<ShoeAllItemTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeAllItemTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeAllItemTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
