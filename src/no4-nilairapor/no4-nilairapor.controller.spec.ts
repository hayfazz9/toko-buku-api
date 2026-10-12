import { Test, TestingModule } from '@nestjs/testing';
import { No4NilairaporController } from './no4-nilairapor.controller.js';
import { No4NilairaporService } from './no4-nilairapor.service.js';

describe('No4NilairaporController', () => {
  let controller: No4NilairaporController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [No4NilairaporController],
      providers: [No4NilairaporService],
    }).compile();

    controller = module.get<No4NilairaporController>(No4NilairaporController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
