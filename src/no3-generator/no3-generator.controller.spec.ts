import { Test, TestingModule } from '@nestjs/testing';
import { No3GeneratorController } from './no3-generator.controller.js';
import { No3GeneratorService } from './no3-generator.service.js';

describe('No3GeneratorController', () => {
  let controller: No3GeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [No3GeneratorController],
      providers: [No3GeneratorService],
    }).compile();

    controller = module.get<No3GeneratorController>(No3GeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
