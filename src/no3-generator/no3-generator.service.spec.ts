import { Test, TestingModule } from '@nestjs/testing';
import { No3GeneratorService } from './no3-generator.service.js';

describe('No3GeneratorService', () => {
  let service: No3GeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [No3GeneratorService],
    }).compile();

    service = module.get<No3GeneratorService>(No3GeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
