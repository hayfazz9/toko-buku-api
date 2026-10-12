import { Test, TestingModule } from '@nestjs/testing';
import { No5KasirTokoController } from './no5-kasir-toko.controller.js';
import { No5KasirTokoService } from './no5-kasir-toko.service.js';

describe('No5KasirTokoController', () => {
  let controller: No5KasirTokoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [No5KasirTokoController],
      providers: [No5KasirTokoService],
    }).compile();

    controller = module.get<No5KasirTokoController>(No5KasirTokoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
