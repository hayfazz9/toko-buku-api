import { Test, TestingModule } from '@nestjs/testing';
import { No2KonversiSuhuController } from './no2-konversi-suhu.controller.js';
import { No2KonversiSuhuService } from './no2-konversi-suhu.service.js';

describe('No2KonversiSuhuController', () => {
  let controller: No2KonversiSuhuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [No2KonversiSuhuController],
      providers: [No2KonversiSuhuService],
    }).compile();

    controller = module.get<No2KonversiSuhuController>(No2KonversiSuhuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
