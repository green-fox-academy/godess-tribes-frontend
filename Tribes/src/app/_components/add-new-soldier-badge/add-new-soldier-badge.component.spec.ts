import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSoldierBadgeComponent } from './add-new-soldier-badge.component';

describe('AddNewSoldierBadgeComponent', () => {
  let component: AddNewSoldierBadgeComponent;
  let fixture: ComponentFixture<AddNewSoldierBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSoldierBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSoldierBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
