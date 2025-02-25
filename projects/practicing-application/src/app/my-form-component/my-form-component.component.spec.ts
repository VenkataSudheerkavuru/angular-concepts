import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormComponentComponent } from './my-form-component.component';

describe('MyFormComponentComponent', () => {
  let component: MyFormComponentComponent;
  let fixture: ComponentFixture<MyFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFormComponentComponent]
    });
    fixture = TestBed.createComponent(MyFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
