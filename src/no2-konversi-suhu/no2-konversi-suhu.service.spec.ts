import { Test, TestingModule } from '@nestjs/testing';
import { No2KonversiSuhuService } from './no2-konversi-suhu.service.js';

describe('No2KonversiSuhuService', () => {
  let service: No2KonversiSuhuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [No2KonversiSuhuService],
    }).compile();

    service = module.get<No2KonversiSuhuService>(No2KonversiSuhuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
