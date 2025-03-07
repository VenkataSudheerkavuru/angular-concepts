import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserComponentComponent } from './dashboard-user-component.component';

describe('DashboardUserComponentComponent', () => {
  let component: DashboardUserComponentComponent;
  let fixture: ComponentFixture<DashboardUserComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserComponentComponent]
    });
    fixture = TestBed.createComponent(DashboardUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
