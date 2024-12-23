import { TestBed } from '@angular/core/testing';

import { ListRegiaoService } from './list-regiao.service';

describe('ListRegiaoService', () => {
  let service: ListRegiaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRegiaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
