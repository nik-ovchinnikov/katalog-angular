import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypesComponent } from './choose-types.component';

describe('ChooseTypesComponent', () => {
  let component: ChooseTypesComponent;
  let fixture: ComponentFixture<ChooseTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
