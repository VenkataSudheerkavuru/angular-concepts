import { TestBed } from '@angular/core/testing';

import { MyServiceExampleService } from './my-service-example.service';

describe('MyServiceExampleService', () => {
  let service: MyServiceExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
