import { Test, TestingModule } from '@nestjs/testing';
import { No1CekBilanganService } from './no1-cek-bilangan.service.js';

describe('No1CekBilanganService', () => {
  let service: No1CekBilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [No1CekBilanganService],
    }).compile();

    service = module.get<No1CekBilanganService>(No1CekBilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
