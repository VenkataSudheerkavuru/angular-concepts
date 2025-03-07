import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTemplateComponent } from './empty-template.component';

describe('EmptyTemplateComponent', () => {
  let component: EmptyTemplateComponent;
  let fixture: ComponentFixture<EmptyTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyTemplateComponent]
    });
    fixture = TestBed.createComponent(EmptyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
