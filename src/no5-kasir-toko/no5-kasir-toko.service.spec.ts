import { Test, TestingModule } from '@nestjs/testing';
import { No5KasirTokoService } from './no5-kasir-toko.service.js';

describe('No5KasirTokoService', () => {
  let service: No5KasirTokoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [No5KasirTokoService],
    }).compile();

    service = module.get<No5KasirTokoService>(No5KasirTokoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
