import { Test, TestingModule } from '@nestjs/testing';
import { No4NilairaporService } from './no4-nilairapor.service.js';

describe('No4NilairaporService', () => {
  let service: No4NilairaporService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [No4NilairaporService],
    }).compile();

    service = module.get<No4NilairaporService>(No4NilairaporService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
