import { TestBed } from '@angular/core/testing';

import { KeepPostsService } from './keep-posts.service';

describe('KeepPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeepPostsService = TestBed.get(KeepPostsService);
    expect(service).toBeTruthy();
  });
});
