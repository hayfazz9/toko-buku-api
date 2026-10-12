import { Test, TestingModule } from '@nestjs/testing';
import { No1CekBilanganController } from './no1-cek-bilangan.controller.js';
import { No1CekBilanganService } from './no1-cek-bilangan.service.js';

describe('No1CekBilanganController', () => {
  let controller: No1CekBilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [No1CekBilanganController],
      providers: [No1CekBilanganService],
    }).compile();

    controller = module.get<No1CekBilanganController>(No1CekBilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
