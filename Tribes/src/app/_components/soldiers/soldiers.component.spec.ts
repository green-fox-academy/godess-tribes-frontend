import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldiersComponent } from './soldiers.component';

describe('SoldiersComponent', () => {
  let component: SoldiersComponent;
  let fixture: ComponentFixture<SoldiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
